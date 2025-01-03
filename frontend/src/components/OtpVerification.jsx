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
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/verify-email',
        { token, verificationCode },
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
      toast.error(
        error.response?.data?.message ||
          'Email verification failed. Please try again.',
      );
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





















// import { useContext, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { Navigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import AuthContext from '../context/AuthContext';

// const OtpVerificationPage = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   font-family: 'Roboto', sans-serif;
// `;

// const OtpContainer = styled.div`
//   text-align: center;
//   padding: 30px 20px;
//   border-radius: 12px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//   max-width: 400px;
//   width: 100%;
// `;

// const OtpInputContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const OtpInput = styled.input`
//   width: 50px;
//   height: 50px;
//   font-size: 1.5rem;
//   text-align: center;
//   border: 2px solid #ddd;
//   border-radius: 8px;
//   outline: none;
//   transition: all 0.3s ease;
//   background: #f9f9f9;

//   &:focus {
//     border-color: #0cbb69;
//     background: #fff;
//   }
// `;

// const VerifyButton = styled.button`
//   background: #0cbb69;
//   color: #fff;
//   font-size: 1rem;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.3s ease;
//   width: 100%;

//   &:hover {
//     background: #068047;
//   }
// `;
// const ResendButton = styled.button`
//   background:rgba(56, 124, 202, 0.6);
//   color: #fff;
//   font-size: 1rem;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.3s ease;
//   width: 100%;
//   margin-top: 10px;

//   &:hover {
//     background: #ec971f;
//   }
// `;

// const OtpVerification = () => {
//   const { user, login } = useContext(AuthContext);
//   const { email } = useParams();
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);

//   const handleChange = (value, index) => {
//     if (!/^\d*$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-input-${index + 1}`).focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
//       document.getElementById(`otp-input-${index - 1}`).focus();
//     }
//   };

//   const handleOtpVerification = async (e) => {
//     e.preventDefault();
//     const enteredOtp = otp.join('');
//     const data = {
//       email,
//       otp: enteredOtp,
//     };
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/auth/verify-otp',
//         data,
//       );
//       if (response.data.success) {
//         login(response.data.token, response.data.user);
//         toast.success('OTP verified successfully!');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch {
//       toast.error('OTP verification failed. Please try again.');
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/auth/send-otp',
//         { email },
//       );
//       toast.success(response.data.message);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           'Failed to resend OTP. Please try again.',
//       );
//     }
//   };

//   if (user) {
//     return <Navigate to="/Home" />;
//   }

//   return (
//     <OtpVerificationPage>
//       <OtpContainer>
//         <h1>OTP Verification</h1>
//         <p>Please enter the 6-digit code sent to your email.</p>
//         <OtpInputContainer>
//           {otp.map((digit, index) => (
//             <OtpInput
//               key={index}
//               id={`otp-input-${index}`}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, index)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//             />
//           ))}
//         </OtpInputContainer>
//         <VerifyButton onClick={handleOtpVerification}>Verify OTP</VerifyButton>
//         <ResendButton onClick={handleResendOTP}>Resend OTP</ResendButton>
//       </OtpContainer>
//     </OtpVerificationPage>
//   );
// };

// export default OtpVerification;
