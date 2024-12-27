import mongoose, { Schema, model } from 'mongoose';

const ResourceSchema = new Schema(
  {
    title: { type: String, required: true },
    filePath: { type: String, required: true },
    fileName: { type: String, required: true },
  },
  { timestamps: true }
);

const Resource = model('Resource', ResourceSchema);

export default Resource;
