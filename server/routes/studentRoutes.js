import { Router } from 'express';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';
import {
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  getPerformanceDataStudent,
  exportPerformanceDataCSV,
  exportPerformanceAsPDF,
  getAllBooks,
  getAttendanceByStudent,
  getAssignments,
  getAllAnnouncements,
} from '../controllers/studentController.js';

const router = Router();

// Profile routes
/**
 * @route   GET /api/profile
 * @desc    Get user profile
 * @access  Private (Student)
 */
router.get('/profile',  getUserProfile);

/**
 * @route   PUT /api/profile
 * @desc    Update user profile
 * @access  Private (Student)
 */
router.put('/profile',  updateUserProfile);

/**
 * @route   PUT /api/profile/password
 * @desc    Update user password
 * @access  Private (Student)
 */
router.put(
  '/profile/password',

  updateUserPassword,
);

// Performance routes
/**
 * @route   GET /api/performance/:userId
 * @desc    Get user performance
 * @access  Private (Student)
 */
router.get(
  '/performance/:userId',

  getPerformanceDataStudent,
);

/**
 * @route   GET /api/performance/export/:type/:userId
 * @desc    Export user performance
 * @access  Private (Student)
 */
router.get(
  '/performance/export/:type/:userId',

  exportPerformanceDataCSV,
);
router.get(
  '/performance/export/pdf/:userId',

  exportPerformanceAsPDF,
);

// Library routes
/**
 * @route   GET /api/library/books
 * @desc    Get all books
 * @access  Private (Student)
 */
router.get('/library/books', getAllBooks);

// Attendance routes
/**
 * @route   GET /api/attendance/:studentId
 * @desc    Get attendance data
 * @access  Private (Student)
 */
router.get(
  '/attendance/:studentId',

  getAttendanceByStudent,
);

// Assignment routes
/**
 * @route   GET /api/assignments
 * @desc    Get all assignments
 * @access  Private (Student)
 */
router.get('/assignments',  getAssignments);

// Announcement routes
/**
 * @route   GET /api/announcements
 * @desc    Get all announcements
 * @access  Private (Student)
 */
router.get(
  '/announcements',
  
  getAllAnnouncements,
);

export default router;
