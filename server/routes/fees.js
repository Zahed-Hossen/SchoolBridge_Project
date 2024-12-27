import { Router } from 'express';
import { getFeesByStudent } from '../controllers/feesController.js';

const router = Router();

// Get fees for a specific student with optional status and date filters
router.get('/fees/:studentId', getFeesByStudent);

export default router;
