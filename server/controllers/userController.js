import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

// Fetch all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// Add a new user
export const addUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ fullName, email, password: hashedPassword, role });
  await newUser.save();
  res.status(201).json(newUser);
});

// Update a user
export const updateUser = asyncHandler(async (req, res) => {
  const { fullName, email, role, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { fullName, email, role, password: hashedPassword },
    { new: true },
  );
  res.status(200).json(updatedUser);
});

// Delete a user
export const deleteUser = asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'User deleted successfully.' });
});

// Fetch user profile
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found.' });
  res.json(user);
});

// Update user profile
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { fullName, phone, bio, profilePic } = req.body;
  let user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found.' });

  // Update fields
  if (fullName) user.fullName = fullName;
  if (phone) user.phone = phone;
  if (bio) user.bio = bio;
  if (profilePic) user.profilePic = profilePic;

  await user.save();
  res.json({ message: 'Profile updated successfully.', user });
});

// Update user password
export const updateUserPassword = asyncHandler(async (req, res) => {
  const { newPassword } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found.' });

  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);

  await user.save();
  res.json({ message: 'Password updated successfully.' });
});
