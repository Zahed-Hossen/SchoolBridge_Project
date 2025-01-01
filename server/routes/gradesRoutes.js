import express from 'express';
import { getGradesByChildId } from '../controllers/gradesController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

const router = express.Router();

// Get Grades by Child ID
router.get('/grades/:childId', verifyTokenAndRole(['Parent', 'Teacher', 'Admin']), getGradesByChildId);

export default router;
