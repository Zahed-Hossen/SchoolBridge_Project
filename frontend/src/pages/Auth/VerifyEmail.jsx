import  { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    if (token) {
      axios.get(`http://localhost:5000/api/auth/verify-email?token=${token}`)
        .then(response => {
          setMessage(response.data.message);
          setTimeout(() => {
            navigate('/login');
          }, 3000); // Redirect to login after 3 seconds
        })
        .catch(error => {
          setMessage(error.response.data.message || 'Verification failed.');
        });
    } else {
      setMessage('Invalid or missing token.');
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Email Verification</h1>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
