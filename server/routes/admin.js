import { Router } from 'express';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

import {
  newClass,
  updateClass,
  deleteClass,
  getExams,
  addNewExams,
  updateExams,
  deleteExam,
  getAllEvents,
  addNewEvent,
  updateEvent,
  deleteEvent,
  getAllFees,
  addNewFees,
  updateFees,
  deleteFees,
} from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';
const router = Router();

// User routes
router.get('/users', verifyTokenAndRole(['Admin']), getUsers);
router.post('/users', verifyTokenAndRole(['Admin']), addUser);
router.put('/users/:id', verifyTokenAndRole(['Admin']), updateUser);
router.delete('/users/:id', verifyTokenAndRole(['Admin']), deleteUser);

// Admin profile routes
router.get('/profile', verifyTokenAndRole(['Admin']), getUserProfile);
router.put('/profile', verifyTokenAndRole(['Admin']), updateUserProfile);

// Class routes
router.post('/classes', verifyTokenAndRole(['Admin']), newClass);
router.put('/classes/:id', verifyTokenAndRole(['Admin']), updateClass);
router.delete('/classes/:id', verifyTokenAndRole(['Admin']), deleteClass);

// Exam routes
router.get('/exams', verifyTokenAndRole(['Admin']), getExams);
router.post('/exams', verifyTokenAndRole(['Admin']), addNewExams);
router.put('/exams/:id', verifyTokenAndRole(['Admin']), updateExams);
router.delete('/exams/:id', verifyTokenAndRole(['Admin']), deleteExam);

// Event routes
router.get('/events', verifyTokenAndRole(['Admin']), getAllEvents);
router.post('/events', verifyTokenAndRole(['Admin']), addNewEvent);
router.put('/events/:id', verifyTokenAndRole(['Admin']), updateEvent);
router.delete('/events/:id', verifyTokenAndRole(['Admin']), deleteEvent);

// Fee routes
router.get('/fees', verifyTokenAndRole(['Admin']), getAllFees);
router.post('/fees', verifyTokenAndRole(['Admin']), addNewFees);
router.put('/fees/:id', verifyTokenAndRole(['Admin']), updateFees);
router.delete('/fees/:id', verifyTokenAndRole(['Admin']), deleteFees);

export default router;

