import { useState } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
import Modal from './Modal';

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
  // const { login } = useAuth();

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

  const handleLoginSuccess = (token) => {
    localStorage.setItem('authToken', token);
    const decodedToken = jwtDecode(token);
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
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        const result = await response.json();
        if (response.ok) {
          alert('Login Successful!');
          handleLoginSuccess(result.token);
          onClose();
          setEmail('');
          setPassword('');
          setRole('');
        } else {
          alert(result.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again later.');
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


























// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
// import  { jwtDecode } from 'jwt-decode';
// import Modal from './Modal';
// import { apiFetch } from '../utils/api';
// import { validateEmail, validatePassword, validateRole } from '../utils/validation';
// import { routes } from './routes';

// import {
//   ModalHeader,
//   ModalTitle,
//   CloseButton,
//   ModalBody,
//   ModalFooter,
//   PrimaryButton,
//   FormGroup,
//   Input,
//   ErrorMessage,
//   SecondaryButton,
// } from './ModalStyles';

// const roles = ['Teacher', 'Student', 'Parent', 'Admin'];

// const LoginModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isOpen) document.getElementById('email').focus();
//   }, [isOpen]);

//   // Validate form inputs
//   const validateForm = () => {
//     const newErrors = {};
//     if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address';
//     if (!validatePassword(password)) newErrors.password = 'Password must be at least 6 characters';
//     if (!validateRole(role)) newErrors.role = 'Role is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle login success and redirect based on role
//   const handleLoginSuccess = (token) => {
//     localStorage.setItem('authToken', token);
//     const decodedToken = jwtDecode(token);
//     const userRole = decodedToken.role;
//     const dashboardPath = routes[userRole];
//     if (dashboardPath) {
//       navigate(dashboardPath);
//     } else {
//       alert('Invalid role. Please contact support.');
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const loginData = { email, password, role };
//       setLoading(true);
//       try {
//         const result = await apiFetch('/api/auth/login', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(loginData),
//         });
//         alert('Login Successful!');
//         handleLoginSuccess(result.token);
//         onClose();
//         setEmail('');
//         setPassword('');
//         setRole('');
//       } catch (error) {
//         console.error('Error logging in:', error);
//         alert(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalHeader className="modal-drag-handle">
//         <ModalTitle>Login</ModalTitle>
//         <CloseButton onClick={onClose}>&times;</CloseButton>
//       </ModalHeader>
//       <ModalBody>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <label htmlFor="email">Email:</label>
//             <Input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
//           </FormGroup>
//           <FormGroup>
//             <label htmlFor="password">Password:</label>
//             <Input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             {errors.password && (
//               <ErrorMessage>{errors.password}</ErrorMessage>
//             )}
//           </FormGroup>
//           <FormGroup>
//             <label htmlFor="role">Role:</label>
//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//             >
//               <option value="">Select your role</option>
//               {roles.map((roleOption) => (
//                 <option key={roleOption} value={roleOption}>
//                   {roleOption}
//                 </option>
//               ))}
//             </select>
//             {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
//           </FormGroup>
//           <a href="/forgot-password" className="forgot-password">
//             Forgot Password?
//           </a>
//           <ModalFooter>
//             <PrimaryButton type="submit" disabled={loading}>
//               {loading ? 'Loading...' : 'Login'}
//             </PrimaryButton>
//             <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
//           </ModalFooter>
//         </form>
//       </ModalBody>
//     </Modal>
//   );
// };

// LoginModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default LoginModal;
