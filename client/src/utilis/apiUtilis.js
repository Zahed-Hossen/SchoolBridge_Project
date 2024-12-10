import axios from "axios";

// Set the base URL for your API
const BASE_URL = "https://your-api-domain.com/api/v1"; 

// Axios instance for common headers
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Login API
export const loginUser = async (email, password) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response.data; // Token or user data
    } catch (error) {
        throw error.response?.data?.message || "Login failed!";
    }
};

// Signup API
export const signupUser = async (userData) => {
    try {
        const response = await api.post("/auth/signup", userData);
        return response.data; // Success message
    } catch (error) {
        throw error.response?.data?.message || "Signup failed!";
    }
};

// Send Password Reset Link API
export const sendPasswordResetLink = async (email) => {
    try {
        const response = await api.post("/auth/reset-password", { email });
        return response.data; // Success message
    } catch (error) {
        throw error.response?.data?.message || "Error sending reset link!";
    }
};

// Reset Password API
export const resetPassword = async (token, newPassword) => {
    try {
        const response = await api.post(`/auth/reset-password/${token}`, {
            password: newPassword,
        });
        return response.data; // Success message
    } catch (error) {
        throw error.response?.data?.message || "Password reset failed!";
    }
};

// Verify Email API
export const verifyEmail = async (token) => {
    try {
        const response = await api.get(`/auth/verify-email/${token}`);
        return response.data; // Success message
    } catch (error) {
        throw error.response?.data?.message || "Email verification failed!";
    }
};