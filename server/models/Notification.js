import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  parentId: { type: String, ref: 'Parent', required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Notification', NotificationSchema);
//parentId : mongoose.Schema.Types.ObjectId
