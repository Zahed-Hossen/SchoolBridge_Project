import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import Performance from '../models/Performance.js';
import Book from '../models/Book.js';
import Attendance from '../models/Attendance.js';
import Assignment from '../models/Assignment.js';
import Announcement from '../models/announcement.js';
import bcrypt from 'bcryptjs';



// Fetch user profile
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// Update user profile
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { fullName, email, phone, bio, profilePic } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.fullName = fullName || user.fullName;
  user.email = email || user.email;
  user.phone = phone || user.phone;
  user.bio = bio || user.bio;
  user.profilePic = profilePic || user.profilePic;
  await user.save();
  res.json(user);
});

// Update user password
export const updateUserPassword = asyncHandler(async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.json({ message: 'Password updated successfully' });
});

// Performance Controllers

// Get user performance
export const getPerformanceDataStudent = asyncHandler(async (req, res) => {
  const performance = await Performance.find({ userId: req.params.userId });
  if (!performance) {
    return res.status(404).json({ message: 'Performance data not found' });
  }
  res.json(performance);
});

// Export performance data as CSV
export const exportPerformanceDataCSV = asyncHandler(async (req, res) => {
  const performance = await Performance.find({ userId: req.params.userId });
  if (!performance) {
    return res.status(404).json({ message: 'Performance data not found' });
  }
  // Logic to export performance data as CSV
  res.json({ message: 'Performance data exported as CSV' });
});

// Export performance data as PDF
export const exportPerformanceAsPDF = asyncHandler(async (req, res) => {
  const performance = await Performance.find({ userId: req.params.userId });
  if (!performance) {
    return res.status(404).json({ message: 'Performance data not found' });
  }
  // Logic to export performance data as PDF
  res.json({ message: 'Performance data exported as PDF' });
});

// Library Controllers

// Get all books
export const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Attendance Controllers

// Get attendance data for a specific student
export const getAttendanceByStudent = asyncHandler(async (req, res) => {
  const attendance = await Attendance.find({ studentId: req.params.studentId });
  if (!attendance) {
    return res.status(404).json({ message: 'Attendance data not found' });
  }
  res.json(attendance);
});

// Assignment Controllers

// Get all assignments
export const getAssignments = asyncHandler(async (req, res) => {
  const assignments = await Assignment.find({ studentId: req.user.id });
  res.json(assignments);
});

// Announcement Controllers

// Get all announcements
export const getAllAnnouncements = asyncHandler(async (req, res) => {
  const announcements = await Announcement.find();
  res.json(announcements);
});
