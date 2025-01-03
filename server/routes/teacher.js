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
router.get('/teacher/tasks', getAllTasks); // Fetch all tasks
router.get('/teacher/activities', getAllActivities); // Fetch all activities

router.get('/teacher/students', getAllStudents); // Fetch all students

//attendance routes
router.get('/teacher/attendance', getAllAttendanceRecords); // Fetch all attendance records
router.post('/teacher/attendance', markAttendance); // Mark attendance

//classes routes
router.get('/teacher/classes', getAllClasses); // Fetch all classes
router.post('/teacher/classes', addNewClass); // Add a new class
router.put('/teacher/classes/:id', updateClass); // Update a class
router.delete('/teacher/classes/:id', deleteClass); // Delete a class

//Perfomance routes
router.get('/teacher/performance/:studentId', getPerformanceData); // Fetch performance data for a student

//messages routes
router.get('/teacher/messages', getAllMessages); // Fetch all messages
router.post('/teacher/messages', sendMessage); // Send a message

//grades routes
router.get('/teacher/grades', getAllGrades); // Fetch all grades
router.post('/teacher/grades', addNewGrade); // Add a new grade

//schedule routes
router.get('/teacher/schedule', getAllScheduleEvents); // Fetch all schedule events
router.post('/teacher/schedule', addNewScheduleEvent); // Add a new schedule event

//resources routes
router.get('/teacher/resources', getAllResources); // Fetch all resources
router.post('/teacher/resources', upload.single('file'), addNewResource); // Add a new resource
router.delete('/teacher/resources/:id', deleteResource); // Delete a resource

export default router;
