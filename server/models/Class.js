import mongoose, { Schema, model } from "mongoose";

const ClassSchema = new Schema(
  {
    name: { type: String, required: true },
    teacher: { type: String, ref: "User", required: true },
    students: [{ type: String, ref: "User" }],
  },
  { timestamps: true }
);

const Class = model("Class", ClassSchema);

export default Class;
//Schema.Types.ObjectId (Teacher, Students)
