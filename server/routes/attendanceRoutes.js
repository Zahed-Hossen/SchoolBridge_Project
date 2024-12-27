import { Router } from 'express';
import { getAttendanceByStudent, getFilteredAttendance } from '../controllers/attendanceController.js';

const router = Router();

// Get attendance for a specific student from the database
router.get('/attendance/:studentId', getAttendanceByStudent);

// Get filtered dummy attendance data
router.get('/attendance', getFilteredAttendance);

export default router;
