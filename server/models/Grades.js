import mongoose from 'mongoose';

const GradesSchema = new mongoose.Schema({
  childId: { type: String, ref: 'Child', required: true },
  subject: { type: String, required: true },
  grade: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Grades', GradesSchema);
//ChildId: mongoose.Schema.Types.ObjectId
