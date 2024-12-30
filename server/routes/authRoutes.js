import { Router } from 'express';
import {
  registerUser,
  loginUser,
  checkAuth,
  verifyEmail,
  logout,
  passwordReset,
  resetPassword,
  // verifyOtp,
  OTPRequest,
  // OTPVerification
} from '../controllers/authController.js';
const router = Router();

import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

router.get('/check-auth', verifyTokenAndRole, checkAuth);
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/verify-email', verifyEmail);
router.post('/logout', logout);
router.post('/forgot-password', passwordReset);
router.post('/reset-password/:token', resetPassword);
// router.post('/verify-otp', verifyOtp);
router.post( '/send-otp', OTPRequest);
// router.post('/otp-verification', OTPVerification);


export default router;
