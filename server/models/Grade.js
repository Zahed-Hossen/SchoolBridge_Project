import { Schema, model } from 'mongoose';

const gradeSchema = new Schema({
  student: {
    type: String,
    ref: 'User',
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
});

export default model('Grade', gradeSchema);
//Student: Schema.Types.ObjectId
