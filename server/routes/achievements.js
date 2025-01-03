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
router.get('/',  getAchievements);

// Get Achievement by ID
router.get('/:id',  getAchievementById);

// Add New Achievement
router.post('/',  addAchievement);

// Update Achievement
router.put('/:id', updateAchievement);

// Delete Achievement
router.delete('/:id', deleteAchievement);

export default router;
