import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './LoginModal.css';
import PropTypes from 'prop-types';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      let isDragging = false;
      let isResizing = false;
      let startX, startY, startWidth, startHeight;

      const handleMouseDown = (e) => {
        if (e.target.classList.contains('resize-handle')) {
          isResizing = true;
          startX = e.clientX;
          startY = e.clientY;
          startWidth = parseInt(document.defaultView.getComputedStyle(modal).width, 10);
          startHeight = parseInt(document.defaultView.getComputedStyle(modal).height, 10);
        } else {
          isDragging = true;
          startX = e.clientX - modal.offsetLeft;
          startY = e.clientY - modal.offsetTop;
        }
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      };

      const handleMouseMove = (e) => {
        if (isDragging) {
          modal.style.left = `${e.clientX - startX}px`;
          modal.style.top = `${e.clientY - startY}px`;
        } else if (isResizing) {
          modal.style.width = `${startWidth + e.clientX - startX}px`;
          modal.style.height = `${startHeight + e.clientY - startY}px`;
        }
      };

      const handleMouseUp = () => {
        isDragging = false;
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      modal.addEventListener('mousedown', handleMouseDown);
      return () => {
        modal.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, []);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!role) newErrors.role = 'Role is required';
    if (password && password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSuccess = (token) => {
    // Decode JWT token to get user role
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    // Define role-based redirection paths
    const roleDashboardPaths = {
      Teacher: '/dashboard/teacher',
      Student: '/dashboard/student',
      Parent: '/dashboard/parent',
      Admin: '/dashboard/admin',
    };

    // Redirect user to the appropriate dashboard
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
        const response = await fetch('/api/auth/login', {
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

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="close-btn" onClick={onClose}>&times;</span>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select your role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Admin">Admin</option>
            </select>
            {errors.role && <span className="error-message">{errors.role}</span>}
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="resize-handle"></div>
      </div>
    </div>
  );
};
LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
