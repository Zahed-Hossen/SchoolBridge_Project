import { Router } from 'express';
import {
  registerUser,
  loginUser,
  checkAuth,
  verifyEmail,
  logout,
  passwordReset,
  resetPassword,
  verifyOtp,
} from '../controllers/authController.js';
const router = Router();

import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

router.get('/check-auth', verifyTokenAndRole, checkAuth);
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/verify-email', verifyEmail);
router.post('/logout', logout);
router.post('/verify-otp', verifyOtp);
router.post('/forgot-password', passwordReset);
router.post('/reset-password/:token', resetPassword);


// router.get("/admin/dashboard", verifyTokenAndRole, authorize('admin'), (req,res) => {
//   res.status(200).json({message: "Welcome to the admin page!"});
// }
// );

router.get(
  '/teacher/dashboard',
  verifyTokenAndRole(['Teacher']),
  (req, res) => {
    res.status(200).json({ message: 'Welcome to the Teacher Dashboard!' });
  },
);

// router.get('/admin/dashboard', verifyTokenAndRole(['Admin']), (req, res) => {
//   res.status(200).json({ message: 'Welcome to the Admin Dashboard!' });
// });

export default router;
