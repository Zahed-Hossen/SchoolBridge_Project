import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema({
  childId: { type: String, ref: 'Child', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  badgeIcon: { type: String, required: true },
});

export default mongoose.model('Achievement', AchievementSchema);
//ChildId : mongoose.Schema.Types.ObjectId
