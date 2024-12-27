import express from 'express';
import Notification from '../models/Notification.js';

const router = express.Router();

// Get Notifications
router.get('/', async (req, res) => {
  try {
    const parentId = req.user.id; // Assume parent's ID is attached to the request
    const notifications = await Notification.find({ parentId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error });
  }
});

// Mark Notification as Read
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Notification.findByIdAndUpdate(id, { read: true });
    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating notification', error });
  }
});

export default router;
