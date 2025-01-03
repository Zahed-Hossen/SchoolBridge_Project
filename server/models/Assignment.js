import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
  },
  { timestamps: true },
);

const Assignment = mongoose.model('Assignment', assignmentSchema);

export default Assignment;
