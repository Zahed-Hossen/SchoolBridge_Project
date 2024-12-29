import { useState } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import {
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  CheckboxLabel,
  FormGroup,
  Input,
  FeedbackMessage,
  PrimaryButton,
  SecondaryButton,
} from './ModalStyles';

const SignUpModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const validateForm = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'Full Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone is required';
    if (!password) newErrors.password = 'Password is required';
    if (!confirmPassword)
      newErrors.confirmPassword = 'Confirm Password is required';
    if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!termsAccepted)
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    if (!role) newErrors.role = 'Role is required';
    if (password && password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Please enter a valid email address';
    if (phone && !/^\d{11}$/.test(phone))
      newErrors.phone = 'Please enter a valid phone number';
    setFeedback(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUpSuccess = (token) => {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    const isVerified = decodedToken.isVerified;

    const roleDashboardPaths = {
      Teacher: '/teacher/dashboard',
      Student: '/student/dashboard',
      Parent: '/parent/dashboard',
      Admin: '/admin/dashboard',
    };

    if (!isVerified) {
      navigate('/verify-email');
    } else {
      const dashboardPath = roleDashboardPaths[userRole];
      if (dashboardPath) {
        navigate(dashboardPath);
      } else {
        console.error('Invalid role or redirection path not defined.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const signUpData = { fullName, email, phone, password, role };
      try {
        const response = await fetch(
          'https://schoolbridge-project-server.onrender.com/api/auth/signup',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(signUpData),
          },
        );

        const result = await response.json();
        if (response.ok) {
          alert('Sign Up Successful!');
          handleSignUpSuccess(result.token);
          onClose();
          setFullName('');
          setEmail('');
          setPhone('');
          setPassword('');
          setConfirmPassword('');
          setRole('');
          setTermsAccepted(false);
        } else {
          alert(result.message || 'Sign Up failed. Please try again.');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader className="modal-drag-handle">
        <ModalTitle>Sign Up</ModalTitle>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="fullName">Full Name:</label>
            <Input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {feedback.fullName && (
              <FeedbackMessage>{feedback.fullName}</FeedbackMessage>
            )}
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email:</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {feedback.email && (
              <FeedbackMessage>{feedback.email}</FeedbackMessage>
            )}
          </FormGroup>
          <FormGroup>
            <label htmlFor="phone">Phone:</label>
            <Input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {feedback.phone && (
              <FeedbackMessage>{feedback.phone}</FeedbackMessage>
            )}
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
            {feedback.password && (
              <FeedbackMessage>{feedback.password}</FeedbackMessage>
            )}
          </FormGroup>
          <FormGroup>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {feedback.confirmPassword && (
              <FeedbackMessage>{feedback.confirmPassword}</FeedbackMessage>
            )}
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
            {feedback.role && (
              <FeedbackMessage>{feedback.role}</FeedbackMessage>
            )}
          </FormGroup>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            I accept the terms and conditions
            {feedback.termsAccepted && (
              <FeedbackMessage>{feedback.termsAccepted}</FeedbackMessage>
            )}
          </CheckboxLabel>
          <ModalFooter>
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
            <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignUpModal;
