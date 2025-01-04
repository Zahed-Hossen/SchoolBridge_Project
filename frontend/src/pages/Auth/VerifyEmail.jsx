import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://schoolbridge-project-server.onrender.com/api/auth/verify-email',
        { email, code },
      );
      const { user } = response.data;
      toast.success('Email verified successfully');
      setMessage(response.data.message);


      const roleDashboardPaths = {
        Teacher: '/teacher/dashboard',
        Student: '/student/dashboard',
        Parent: '/parent/dashboard',
        Admin: '/admin/dashboard',
      };

      const dashboardPath = roleDashboardPaths[user.role];
      if (dashboardPath) {
        navigate(dashboardPath);
      } else {
        console.error('Invalid role or redirection path not defined.');
        navigate('/');
      }
    } catch (error) {
      setMessage(error.response.data.message || 'Verification failed.');
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="code">Verification Code:</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Verify Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
