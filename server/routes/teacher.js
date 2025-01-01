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
router.put('/profile/password', verifyTokenAndRole(['Teacher']),updateUserPassword,
);
// Fetch all assignments
router.get( '/assignments', verifyTokenAndRole(['Teacher']), getAllAssignments );
// Add a new assignment
router.post( '/assignments', verifyTokenAndRole(['Teacher']), addNewAssignment );
// Update an assignment
router.put(' /assignments/:id', verifyTokenAndRole(['Teacher']),updateAssignment );
// Delete an assignment
router.delete( '/assignments/:id', verifyTokenAndRole(['Teacher']),deleteAssignment );
// Fetch all tasks
router.get('/tasks', verifyTokenAndRole(['Teacher']), getAllTasks);
// Fetch all activities
router.get('/activities', verifyTokenAndRole(['Teacher']), getAllActivities);
// Fetch all students
router.get('/students', verifyTokenAndRole(['Teacher']), getAllStudents);
// Fetch all attendance records
router.get('/attendance', verifyTokenAndRole(['Teacher']), getAllAttendanceRecords );
// Mark attendance
router.post('/attendance', verifyTokenAndRole(['Teacher']), markAttendance);
// Fetch all classes
router.get('/classes', verifyTokenAndRole(['Teacher']), getAllClasses);
// Add a new class
router.post('/classes', verifyTokenAndRole(['Teacher']), addNewClass);
// Update a class
router.put('/classes/:id', verifyTokenAndRole(['Teacher']), updateClass);
// Delete a class
router.delete('/classes/:id', verifyTokenAndRole(['Teacher']), deleteClass);
// Fetch performance data for a student
router.get( '/performance/:studentId', verifyTokenAndRole(['Teacher']), getPerformanceData );
// Fetch all messages
router.get('/messages', verifyTokenAndRole(['Teacher']), getAllMessages);
// Send a message
router.post('/messages', verifyTokenAndRole(['Teacher']), sendMessage);
// Fetch all grades
router.get('/grades', verifyTokenAndRole(['Teacher']), getAllGrades);
// Add a new grade
router.post('/grades', verifyTokenAndRole(['Teacher']), addNewGrade);
// Fetch all schedule events
router.get('/schedule', verifyTokenAndRole(['Teacher']), getAllScheduleEvents);
// Add a new schedule event
router.post('/schedule', verifyTokenAndRole(['Teacher']), addNewScheduleEvent);
// Fetch all resources
router.get('/resources', verifyTokenAndRole(['Teacher']), getAllResources);
// Add a new resource
router.post('/resources', verifyTokenAndRole(['Teacher']), upload.single('file'), addNewResource);
// Delete a resource
router.delete('/resources/:id', verifyTokenAndRole(['Teacher']), deleteResource);


export default router;

