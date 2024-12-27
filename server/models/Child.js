import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  rollNumber: { type: String, required: true },
  profilePicture: { type: String },
  parentId: { type: String, ref: 'Parent', required: true }
});

const Child = mongoose.model('Child', childSchema);

export default Child;

//parentId : mongoose.Schema.Types.ObjectId
