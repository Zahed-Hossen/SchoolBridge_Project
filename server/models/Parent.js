import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  profilePicture: { type: String }
});

const Parent = mongoose.model('Parent', parentSchema);

export default Parent;
