import { Router } from 'express';
import {
  registerUser,
  loginUser,
  checkAuth,
  verifyEmail,
  logout,
  passwordReset,
  resetPassword,
  generateOTP,
  resendOTP,
  // OTPRequest,
  // OTPVerification
  // verifyOtp,
  OTPRequest,
  // OTPVerification
} from '../controllers/authController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';


const router = Router();


router.get('/check-auth', verifyTokenAndRole, checkAuth);
router.post('/signup',  registerUser);
router.post('/login', loginUser);
router.post('/verify-email', verifyEmail);
router.post('/logout', logout);
router.post('/forgot-password', passwordReset);
router.post('/reset-password/:token', resetPassword);
// router.post('/verify-otp', verifyOtp);
router.post( '/send-otp', OTPRequest);
// router.post('/otp-verification', OTPVerification);
router.post('/generate-otp', generateOTP);
// router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOTP);

export default router;
