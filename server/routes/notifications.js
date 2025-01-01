import express from 'express';
import {
  getAllNotifications,
  notificationController,
} from '../controllers/notificationController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

const router = express.Router();

// Get Notifications
router.get('/', verifyTokenAndRole(['Parent', 'Teacher', 'Admin', 'Student']), getAllNotifications);
// Mark Notification as Read
router.put('/:id', verifyTokenAndRole(['Parent', 'Teacher', 'Admin', 'Student']), notificationController);

export default router;
