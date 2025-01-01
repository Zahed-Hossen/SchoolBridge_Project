import asyncHandler from 'express-async-handler';
import bcryptjs from 'bcryptjs';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import User from '../models/user.js';
import OTPModel from '../models/OTPModel.js';
import jwt from 'jsonwebtoken';
// import { sendEmail } from '../utils/email.js';
// import { sendSMS } from '../utils/sms.js';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';

import {
  sendPasswordResetRequestEmail,
  sendPasswordResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
  sendSMS,
} from '../config/emails.js';

// Predefined roles
const roles = ['Teacher', 'Student', 'Parent', 'Admin'];

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { role, fullName, email, phone, password } = req.body;
  try {
    if (!role || !fullName || !email || !phone || !password) {
      return res
        .status(400)
        .json({ error: true, message: 'All fields are required.' });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ error: true, message: 'Email is already registered.' });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    const user = await User.create({
      role,
      fullName,
      email,
      phone,
      password: hashedPassword,
      isVerified: false,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 5 * 60 * 1000, // 24 hours
    });

    // Generate token and set as cookie
    const token = generateTokenAndSetCookie(
      res,
      user._id,
      user.role,
      user.isVerified,
    );
    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      token,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Verify email
// @route   GET /api/auth/verify-email
// @access  Public
const verifyEmail = asyncHandler(async (req, res) => {
  const { token, verificationCode } = req.body;
  console.log('Received token:', token);
  console.log('Received verification code:', verificationCode);

  try {
    if (!token) {
      return res
        .status(400)
        .json({ error: true, message: 'Invalid or missing token.' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      verificationToken: verificationCode,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: 'Invalid token or user not found.' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.fullName);

    res.status(200).json({
      success: true,
      message: 'Email verified successfully',
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log('error in verifyEmail ', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});



// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
// @access  Public
// const verifyOtp = asyncHandler(async (req, res) => {
//   const { email, otp } = req.body;
//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: 'User not found' });
//     }

//     if (
//       user.verificationToken !== otp ||
//       user.verificationTokenExpiresAt < Date.now()
//     ) {
//       return res
//         .status(400)
//         .json({ success: false, message: 'Invalid or expired OTP' });
//     }

//     user.isVerified = true;
//     user.verificationToken = undefined;
//     user.verificationTokenExpiresAt = undefined;
//     await user.save();

//     await sendWelcomeEmail(user.email, user.fullName);
//     await user.deleteOne({ email });
//     res
//       .status(200)
//       .json({ success: true, message: 'OTP verified successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });
// File: controllers/authController.js



// const verifyOTP = async (req, res) => {
//   const { email, otp } = req.body;

//   const otpRecord = await OTPModel.findOne({ email });

//   if (!otpRecord) {
//     return res.status(400).json({ message: 'OTP not found' });
//   }

//   if (otpRecord.expiresAt < Date.now()) {
//     return res.status(400).json({ message: 'OTP has expired' });
//   }

//   if (otpRecord.otp !== otp) {
//     return res.status(400).json({ message: 'Invalid OTP' });
//   }

//   await User.findOneAndUpdate({ email }, { isVerified: true });
//   await OTPModel.deleteOne({ email });

//   res.status(200).json({ message: 'OTP verified successfully' });
// };

// export { verifyOTP };





// const verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     // Find OTP record
//     const otpRecord = await OTPModel.findOne({ email }) || await OTPModel.findOne({ phone });

//     if (!otpRecord) {
//       return res
//         .status(400)
//         .json({ success: false, message: 'Invalid email or phone number' });
//     }

//     // Check if OTP matches and is not expired
//     if (otpRecord.otp !== otp || otpRecord.expiresAt < Date.now()) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid or expired OTP. Please try again.',
//       });
//     }

//     // Mark the user as verified (or authenticated)
//     const user = await User.findOneAndUpdate(
//       { email  },
//       { isVerified: true },
//       { new: true },
//     );

//     await sendWelcomeEmail(user.email, user.fullName);
//     await OTPModel.deleteOne({ email });

//     res.status(200).json({
//       success: true,
//       message: 'OTP verified successfully!',
//       user,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.',
//     });
//   }
// };


const OTPRequest = async (req, res) => {
  const { email, phone } = req.body;

  try {
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in database with expiry
    const expiresAt = Date.now() + 10 * 60 * 1000; // Expires in 10 minutes
    await OTPModel.findOneAndUpdate(
      { email, phone },
      { otp: generatedOTP, expiresAt },
      { upsert: true },
    );

    await sendVerificationEmail(User.email, generateOTP);

    res.status(200).json({
      success: true,
      message: 'OTP resent successfully!',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to send OTP. Please try again later.',
    });
  }
};



const generateOTP = async (contact, method) => {
  const otp = crypto.randomBytes(3).toString('hex');
  const expiresAt = Date.now() + 10 * 60 * 1000;

  await OTPModel.findOneAndUpdate(
    { email: contact },
    { otp, expiresAt },
    { upsert: true }
  );

  const message = `Your OTP is ${otp}. It will expire in 10 minutes.`;

  if (method === 'email') {
    await sendVerificationEmail(contact, otp);
  } else if (method === 'sms') {
    await sendSMS(contact, message);
  }

  return otp;
};

const resendOTP = async (req, res) => {
  const { contact, method } = req.body;

  try {
    await generateOTP(contact, method);
    res.status(200).json({ message: 'OTP resent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  if (user.role !== role) {
    return res.status(403).json({
      message: 'Role mismatch. Please select the correct role.',
    });
  }

  if (!user.isVerified) {
    return res.status(403).json({
      message: 'Please verify your email before logging in.',
    });
  }

  console.log('Stored hashed password:', user.password);
  console.log('Plain password:', password);
  const isMatch = await bcrypt.compare(password, user.password);
  console.log('Password match result:', isMatch);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  const token = generateTokenAndSetCookie(res, user._id, user.role, user.isVerified);

  user.lastLogin = new Date();
  await user.save();

  const roleDashboardPaths = {
    Teacher: '/teacher/dashboard',
    Student: '/student/dashboard',
    Parent: '/parent/dashboard',
    Admin: '/admin/dashboard',
  };

  const redirectPath = roleDashboardPaths[user.role];

  res.status(200).json({
    success: true,
    message: 'Logged in successfully',
    token,
    redirectPath,
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});


// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Public
const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ success: true, message: 'Logged out successfully' });
});


// @desc    Handle password reset request
// @route   POST /api/auth/password-reset
// @access  Public
const passwordReset = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res
        .status(400)
        .json({ error: true, message: 'Email is required.' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: true, message: 'Email not found.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetPasswordExpiresAt = Date.now() + 1 * 60 * 60 * 1000;
    // our
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    // Save token and expiration to the user's account
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetPasswordExpiresAt; // 1 hour

    await user.save();

    // send email
    await sendPasswordResetRequestEmail(user.email, resetLink);

    res.status(200).json({
      success: true,
      message: 'Password reset link sent to your email',
    });
  } catch (error) {
    console.log('Error in forgotPassword ', error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Reset password using token
// @route   POST /api/auth/reset-password/:token
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res
        .status(400)
        .json({ error: true, message: 'Password is required.' });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: 'Invalid or expired token.' });
    }

    // Hash the new password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Update user's password and clear reset token
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    await user.save();

    await sendPasswordResetSuccessEmail(user.email);

    res
      .status(200)
      .json({ success: true, message: 'Password reset successful' });
  } catch (error) {
    console.log('Error in resetPassword ', error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Authenticate user with existing credentials
// @route   POST /api/auth/authenticate
// @access  Public
const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log('Error in checkAuth ', error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export {
  registerUser,
  loginUser,
  checkAuth,
  passwordReset,
  resetPassword,
  verifyEmail,
  // verifyOtp,
  logout,
  OTPRequest,
  generateOTP,
  resendOTP,
  // OTPVerification,
};
