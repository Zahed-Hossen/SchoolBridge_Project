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

const router = Router();

// User routes
router.get('/users', verifyTokenAndRole(['Admin']), getUsers);
router.post('/users', verifyTokenAndRole(['Admin']), addUser);
router.put('/users/:id', verifyTokenAndRole(['Admin']), updateUser);
router.delete('/users/:id', verifyTokenAndRole(['Admin']), deleteUser);

// Admin profile routes
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

// Class routes
router.post('/classes',  newClass);
router.put('/classes/:id', updateClass);
router.delete('/classes/:id',  deleteClass);

// Exam routes
router.get('/exams',  getExams);
router.post('/exams',  addNewExams);
router.put('/exams/:id', updateExams);
router.delete('/exams/:id',  deleteExam);

// Event routes
router.get('/events',  getAllEvents);
router.post('/events',  addNewEvent);
router.put('/events/:id',  updateEvent);
router.delete('/events/:id',  deleteEvent);

// Fee routes
router.get('/fees',  getAllFees);
router.post('/fees',  addNewFees);
router.put('/fees/:id',  updateFees);
router.delete('/fees/:id',  deleteFees);

export default router;
