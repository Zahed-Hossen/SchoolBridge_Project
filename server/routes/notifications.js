import express from 'express';
import {
  getAllNotifications,
  notificationController,
} from '../controllers/notificationController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

const router = express.Router();

// Get Notifications
router.get('/',  getAllNotifications);
// Mark Notification as Read
router.put('/:id',  notificationController);

export default router;
