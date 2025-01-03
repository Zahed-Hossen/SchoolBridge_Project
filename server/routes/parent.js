import { Router } from 'express';
const router = Router();
import {
  getParentInfo,
  getGradesByChildId,
  getPerformanceByChildId,
} from '../controllers/parentController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

// Get Parent Info
router.get('/info',  getParentInfo);
// Get Grades by Child ID
router.get('/grades/:childId', getGradesByChildId );
// Get Performance by Child ID
router.get('/performance/:childId',  getPerformanceByChildId );

export default router;
