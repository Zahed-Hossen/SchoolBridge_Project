import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', protect, getUserProfile);
router.put('/', protect, updateUserProfile);
router.put('/password', protect, updateUserPassword);

export default router;
