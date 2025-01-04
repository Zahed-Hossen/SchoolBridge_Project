import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyEmailPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

const VerifyEmailContainer = styled.div`
  text-align: center;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  background: #f9f9f9;

  &:focus {
    border-color: #0cbb69;
    background: #fff;
  }
`;

const Button = styled.button`
  background: #0cbb69;
  color: #fff;
  font-size: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #068047;
  }
`;

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = new URLSearchParams(location.search).get('token');
    const data = { token, verificationCode };

    console.log('Data being sent:', JSON.stringify(data, null, 2));

    try {
      const response = await axios.post(
        'https://schoolbridge-project-server.onrender.com/api/auth/verify-email',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data.success) {
        toast.success('Email verified successfully!');
        navigate('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      console.log('Error details:', JSON.stringify(error, null, 2));
      console.log('Error type:', typeof error);

      if (error && error.response) {
        console.log(
          'Response data:',
          JSON.stringify(error.response.data, null, 2),
        );
        console.log('Response status:', error.response.status);
        console.log(
          'Response headers:',
          JSON.stringify(error.response.headers, null, 2),
        );


        if (error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else if (typeof error.response.data === 'string') {
          toast.error(error.response.data);
        } else {
          toast.error('Invalid verification information. Please try again.');
        }
      } else if (error && error.request) {
        console.error('No response received:', error.request);
        toast.error('Network error. Please try again later.');
      } else if (error && error.message) {
        console.error('Error setting up request:', error.message);
        toast.error('An unexpected error occurred. Please try again later.');
      } else {
        console.error('Unknown error:', error);
        toast.error('An unexpected error occurred. Please try again later.');
      }
    }
  };
  return (
    <VerifyEmailPage>
      <VerifyEmailContainer>
        <h1>OTP Verification</h1>
        <p>Please enter the 6-digit code sent to your email.</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="verificationCode"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={handleChange}
          />
          <Button type="submit">Verify Email</Button>
        </form>
      </VerifyEmailContainer>
    </VerifyEmailPage>
  );
};

export default VerifyEmail;

