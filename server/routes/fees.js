import { Router } from 'express';
import { getFeesByStudent } from '../controllers/feesController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';
const router = Router();

// Get fees for a specific student with optional status and date filters
router.get('/fees/:studentId', verifyTokenAndRole(['Parent',  'Admin']), getFeesByStudent);

export default router;
