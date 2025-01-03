import { useState } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; // import axios from 'axios';
// import api from '../services/api';
import Modal from './Modal';
import axios from 'axios';

import {
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  PrimaryButton,
  FormGroup,
  Input,
  ErrorMessage,
  SecondaryButton,
} from './ModalStyles';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!role) newErrors.role = 'Role is required';
    if (password && password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Please enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSuccess = (accessToken, refreshToken) => {
    localStorage.setItem('authToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const decodedToken = jwtDecode(accessToken);
    const userRole = decodedToken.role;

    const roleDashboardPaths = {
      Teacher: '/teacher/dashboard',
      Student: '/student/dashboard',
      Parent: '/parent/dashboard',
      Admin: '/admin/dashboard',
    };

    const dashboardPath = roleDashboardPaths[userRole];
    if (dashboardPath) {
      navigate(dashboardPath);
    } else {
      console.error('Invalid role or redirection path not defined.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const loginData = { email, password, role };
      try {
        const response = await axios.post(
          'https://schoolbridge-project-server.onrender.com/api/auth/login',
          loginData,
        );

        // const result = await response.json();
        if (response.status >= 200 && response.status < 300) {
          const result = response.data;
          alert('Login Successful!');
          handleLoginSuccess(result.accessToken, result.refreshToken);
          onClose();
          setEmail('');
          setPassword('');
          setRole('');
        } else {
          alert(response.data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          if (error.response.data && error.response.data.message) {
            alert(error.response.data.message);
          } else if (error.response.status === 401) {
            alert('Incorrect username or password');
          } else {
            alert('An unexpected error occurred');
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error(error.request);
          alert('Network error. Please check your connection.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
          alert('An unexpected error occurred');
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader className="modal-drag-handle">
        <ModalTitle>Login</ModalTitle>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email:</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select your role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Admin">Admin</option>
            </select>
            {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
          </FormGroup>

          <ModalFooter>
            <PrimaryButton type="submit">Login</PrimaryButton>
            <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default LoginModal;





// const handleLoginSuccess = (token) => {
//   localStorage.setItem('authToken', token);
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   const decodedToken = jwtDecode(token);
//   const userRole = decodedToken.role;

//   const roleDashboardPaths = {
//     Teacher: '/teacher/dashboard',
//     Student: '/student/dashboard',
//     Parent: '/parent/dashboard',
//     Admin: '/admin/dashboard',
//   };

//   const dashboardPath = roleDashboardPaths[userRole];
//   if (dashboardPath) {
//     navigate(dashboardPath);
//   } else {
//     console.error('Invalid role or redirection path not defined.');
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (validateForm()) {
//     const loginData = { email, password, role };
//     try {
//       const response = await axios.post(
//         'https://schoolbridge-project-server.onrender.com/api/auth/login',
//         loginData,
//         {
//           withCredentials: true,
//         },
//       );

//       // const result = await response.json();
//       if (response.status >= 200 && response.status < 300) {
//         const result = response.data;
//         alert('Login Successful!');
//         handleLoginSuccess(result.token);
//         onClose();
//         setEmail('');
//         setPassword('');
//         setRole('');
//       } else {
//         alert(response.data.message || 'Login failed. Please try again.');
//       }
