import { Router } from 'express';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';
import {
  getUsers,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
} from '../controllers/userController.js';

import {
  getAllResources,
  addNewResource,
  deleteResource,
} from '../controllers/teacherController.js';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

import {
  getAllAssignments,
  addNewAssignment,
  updateAssignment,
  deleteAssignment,
  getAllTasks,
  getAllActivities,
  getAllStudents,
  getAllAttendanceRecords,
  markAttendance,
  getAllClasses,
  addNewClass,
  updateClass,
  deleteClass,
  getAllMessages,
  sendMessage,
  getAllGrades,
  addNewGrade,
  getAllScheduleEvents,
  addNewScheduleEvent,
  getPerformanceData,
} from '../controllers/teacherController.js';

// User routes
router.get('/students', verifyTokenAndRole(['Teacher']), getUsers);
router.get('/profile', verifyTokenAndRole(['Teacher']), getUserProfile);
router.put('/profile', verifyTokenAndRole(['Teacher']), updateUserProfile);
router.put(
  '/profile/password',
  verifyTokenAndRole(['Teacher']),
  updateUserPassword,
);

//Assignments routes
router.get('/teacher/assignments', getAllAssignments); // Fetch all assignments
router.post('/teacher/assignments', addNewAssignment); // Add a new assignment
router.put(' /teacher/assignments/:id', updateAssignment); // Update an assignment
router.delete('/teacher/assignments/:id', deleteAssignment); // Delete an assignment

//tasks routes
router.get('/teacher/tasks', verifyTokenAndRole(['Teacher']), getAllTasks); // Fetch all tasks
router.get(
  '/teacher/activities',
  verifyTokenAndRole(['Teacher']),
  getAllActivities,
); // Fetch all activities

router.get(
  '/teacher/students',
  verifyTokenAndRole(['Teacher']),
  getAllStudents,
); // Fetch all students

//attendance routes
router.get(
  '/teacher/attendance',
  verifyTokenAndRole(['Teacher']),
  getAllAttendanceRecords,
); // Fetch all attendance records
router.post(
  '/teacher/attendance',
  verifyTokenAndRole(['Teacher']),
  markAttendance,
); // Mark attendance

//classes routes
router.get('/teacher/classes', verifyTokenAndRole(['Teacher']), getAllClasses); // Fetch all classes
router.post('/teacher/classes', verifyTokenAndRole(['Teacher']), addNewClass); // Add a new class
router.put(
  '/teacher/classes/:id',
  verifyTokenAndRole(['Teacher']),
  updateClass,
); // Update a class
router.delete(
  '/teacher/classes/:id',
  verifyTokenAndRole(['Teacher']),
  deleteClass,
); // Delete a class

//Perfomance routes
router.get(
  '/teacher/performance/:studentId',
  verifyTokenAndRole(['Teacher']),
  getPerformanceData,
); // Fetch performance data for a student

//messages routes
router.get(
  '/teacher/messages',
  verifyTokenAndRole(['Teacher']),
  getAllMessages,
); // Fetch all messages
router.post('/teacher/messages', verifyTokenAndRole(['Teacher']), sendMessage); // Send a message

//grades routes
router.get('/teacher/grades', verifyTokenAndRole(['Teacher']), getAllGrades); // Fetch all grades
router.post('/teacher/grades', verifyTokenAndRole(['Teacher']), addNewGrade); // Add a new grade

//schedule routes
router.get(
  '/teacher/schedule',
  verifyTokenAndRole(['Teacher']),
  getAllScheduleEvents,
); // Fetch all schedule events
router.post('/teacher/schedule',verifyTokenAndRole(['Teacher']), addNewScheduleEvent); // Add a new schedule event

//resources routes
router.get('/teacher/resources', verifyTokenAndRole(['Teacher']), getAllResources); // Fetch all resources
router.post('/teacher/resources',verifyTokenAndRole(['Teacher']), upload.single('file'),verifyTokenAndRole(['Teacher']), verifyTokenAndRole(['Teacher']),addNewResource); // Add a new resource
router.delete('/teacher/resources/:id', verifyTokenAndRole(['Teacher']),deleteResource); // Delete a resource

export default router;
