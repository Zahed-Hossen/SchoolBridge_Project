import { Schema, model } from 'mongoose';

const scheduleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default model('Schedule', scheduleSchema);
