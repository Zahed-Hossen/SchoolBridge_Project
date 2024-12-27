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

// Fetch all users
// router.get('/users', verifyTokenAndRole(['Admin']), async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error. Please try again.' });
//   }
// });

// // Add a new user
// router.post('/users', verifyTokenAndRole(['Admin']), async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword, role });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error. Please try again.' });
//   }
// });

// // Update a user
// router.put('/users/:id', verifyTokenAndRole(['Admin']), async (req, res) => {
//   const { name, email, role, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { name, email, role, password: hashedPassword },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error. Please try again.' });
//   }
// });

// // Delete a user
// router.delete('/users/:id', verifyTokenAndRole(['Admin']), async (req, res) => {
//   try {
//     await findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: 'User deleted successfully.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error. Please try again.' });
//   }
// });

// // Fetch all classes
// router.get('/classes', verifyTokenAndRole(['Admin']), async (req, res) => {
//   try {
//     const classes = await Class.find().populate('teacher').populate('students');
//     res.status(200).json(classes);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error. Please try again.' });
//   }
// });
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
router.post('/events', verifyTokenAndRole(['Admin']), addNewEvent);

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
