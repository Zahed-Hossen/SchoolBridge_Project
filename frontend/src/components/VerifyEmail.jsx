import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/verify-otp',
        { email: localStorage.getItem('email'), otp },
      );
      setMessage(response.data.message);
      navigate('/login'); 
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Verify Your Email</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
