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
router.get('/profile', verifyTokenAndRole(['Admin']), getUserProfile);
router.put('/profile', verifyTokenAndRole(['Admin']), updateUserProfile);

// Add a new class
router.post('/classes', verifyTokenAndRole(['Admin']), newClass);

// Update a class
router.put('/classes/:id',  updateClass);

// Delete a class
router.delete( '/classes/:id',  deleteClass);

// Fetch all exams
router.get('/exams',  getExams);

// Add a new exam
router.post('/exams',  addNewExams);

// Update an exam
router.put('/exams/:id',  updateExams);

// Delete an exam
router.delete('/exams/:id',  deleteExam);

// Fetch all events
router.get('/events',  getAllEvents);

// Add a new event
router.post('/events',  addNewEvent);

// Update an event
router.put('/events/:id',  updateEvent);

// Delete an event
router.delete( '/events/:id',  deleteEvent);

// Fetch all fees
router.get('/fees',  getAllFees);

// Add a new fee
router.post('/fees',  addNewFees);

// Update a fee
router.put('/fees/:id', updateFees);

// Delete a fee
router.delete('/fees/:id', deleteFees);


export default router;

//verifyTokenAndRole(['Admin']),
