import axios from 'axios';

axios.defaults.withCredentials = true;

// Axios instance
const api = axios.create({
  baseURL: 'https://schoolbridge-project-server.onrender.com/api',
  withCredentials: true,
});

// Add a request interceptor to include the access token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(
          'https://schoolbridge-project-server.onrender.com/api/auth/refresh-token',
          { refreshToken },
          { withCredentials: true },
        );
        const { accessToken } = response.data;
        localStorage.setItem('authToken', accessToken);
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (err) {
        console.error('Token refresh failed:', err);
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
