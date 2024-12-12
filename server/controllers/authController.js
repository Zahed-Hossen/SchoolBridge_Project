import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/User.js';
//import transporter from '../config/nodemailer.js';

// Predefined roles
const roles = ['Teacher', 'Student', 'Parent', 'Admin'];

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { role, fullName, email, password } = req.body;

  if (!role || !fullName || !email || !password) {
    return res.status(400).json({ error: true, message: "All fields are required." });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ error: true, message: "Email is already registered." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomBytes(32).toString("hex");

  const user = await User.create({
    role,
    fullName,
    email,
    password: hashedPassword,
    isVerified: false, // New field for email verification
    verificationToken,
  });

  if (user) {
    const verificationUrl = `http://localhost:3000/verify-email?token=${verificationToken}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification",
      html: `<p>Hi ${fullName},</p>
             <p>Click the link below to verify your email:</p>
             <a href="${verificationUrl}">${verificationUrl}</a>
             <p>If you didn't request this, please ignore this email.</p>`,
    });

    res.status(201).json({
      error: false,
      message: "User registered successfully! Please check your email to verify your account.",
    });
  } else {
    res.status(400).json({ error: true, message: "Invalid user data." });
  }
});

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

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  const token = generateToken(user._id, user.role);

  const roleDashboardPaths = {
    Teacher: '/dashboard/teacher',
    Student: '/dashboard/student',
    Parent: '/dashboard/parent',
    Admin: '/dashboard/admin',
  };

  const redirectPath = roleDashboardPaths[user.role];

  res.status(200).json({
    message: 'Login successful.',
    token,
    redirectPath,
    user: { id: user._id, email: user.email, role: user.role },
  });
});

// @desc    Verify email
// @route   GET /api/auth/verify-email
// @access  Public
// const verifyEmail = asyncHandler(async (req, res) => {
//   const { token } = req.query;

//   if (!token) {
//     return res.status(400).json({ error: true, message: "Invalid or missing token." });
//   }

//   const user = await User.findOne({ verificationToken: token });

//   if (!user) {
//     return res.status(400).json({ error: true, message: "Invalid token or user not found." });
//   }

//   user.isVerified = true;
//   user.verificationToken = undefined; // Remove the token after verification
//   await user.save();

//   res.status(200).json({ error: false, message: "Email verified successfully!" });
// });

// @desc    Handle password reset request
// @route   POST /api/auth/password-reset
// @access  Public
const passwordReset = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required." });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: true, message: "Email not found." });
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

  // Save token and expiration to the user's account
  user.resetToken = resetToken;
  user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
  await user.save();

  // Send the reset link via email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request",
    html: `<p>Hi ${user.fullName},</p>
           <p>You requested a password reset. Click the link below to reset your password:</p>
           <a href="${resetLink}">${resetLink}</a>
           <p>If you did not request this, please ignore this email.</p>`,
  });

  res.status(200).json({
    error: false,
    message: "Password reset link sent to your email.",
  });
});
// @desc    Reset password using token
// @route   POST /api/auth/reset-password/:token
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: true, message: "Password is required." });
  }

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() }, // Ensure token is not expired
  });

  if (!user) {
    return res.status(400).json({ error: true, message: "Invalid or expired token." });
  }

  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Update user's password and clear reset token
  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;

  await user.save();

  res.status(200).json({ error: false, message: "Password has been reset successfully." });
});

// @desc    Authenticate user with existing credentials
// @route   POST /api/auth/authenticate
// @access  Public
const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const user = await User.findOne({ email, role });

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or role.' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password.' });
  }

  res.status(200).json({
    message: 'Login successful!',
    user: { email: user.email, role: user.role },
  });
});

export { registerUser, loginUser, authenticateUser, passwordReset, resetPassword };