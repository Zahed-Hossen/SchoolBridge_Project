import { Router } from 'express';
const router = Router();
import {
  getParentInfo,
  getGradesByChildId,
  getPerformanceByChildId,
} from '../controllers/parentController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

// Get Parent Info
router.get('/info', verifyTokenAndRole(['Parent']), getParentInfo);
// Get Grades by Child ID
router.get('/grades/:childId', verifyTokenAndRole(['Parent']), getGradesByChildId );
// Get Performance by Child ID
router.get('/performance/:childId', verifyTokenAndRole(['Parent']), getPerformanceByChildId );

export default router;
