import { Schema, model } from 'mongoose';

const assignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

export default model('Assignment', assignmentSchema);
