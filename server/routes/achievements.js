import express from 'express';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';
import {
  getAchievements,
  addAchievement,
  updateAchievement,
  deleteAchievement,
  getAchievementById,
} from '../controllers/achievementsController.js';

const router = express.Router();

// Get Achievements by Child ID
router.get('/', verifyTokenAndRole(['Parent', 'Teacher', 'Admin']), getAchievements);

// Get Achievement by ID
router.get('/:id', verifyTokenAndRole(['Parent', 'Teacher', 'Admin']), getAchievementById);

// Add New Achievement
router.post('/', verifyTokenAndRole(['Teacher', 'Admin']), addAchievement);

// Update Achievement
router.put('/:id', verifyTokenAndRole(['Teacher', 'Admin']), updateAchievement);

// Delete Achievement
router.delete('/:id', verifyTokenAndRole(['Teacher', 'Admin']), deleteAchievement);

export default router;
