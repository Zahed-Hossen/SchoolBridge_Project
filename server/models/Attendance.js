import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
  student: {
    type: String,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default model('Attendance', attendanceSchema);
//Student : mongoose.Schema.Types.ObjectId
