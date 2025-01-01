import { Router } from 'express';
import { getPerformanceData, submitFeedback } from '../controllers/getPerformanceController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';
const router = Router();

// Endpoint to get performance data
router.get('/performance', verifyTokenAndRole(['Parent', 'Teacher', 'Admin']), getPerformanceData);

// Endpoint to submit feedback
router.post('/feedback', verifyTokenAndRole(['Parent', 'Teacher', 'Admin']), submitFeedback);

export default router;
