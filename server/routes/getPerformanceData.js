import { Router } from 'express';
import { getPerformanceData, submitFeedback } from '../controllers/getPerformanceController.js';

const router = Router();

// Endpoint to get performance data
router.get('/performance', getPerformanceData);

// Endpoint to submit feedback
router.post('/feedback', submitFeedback);

export default router;
