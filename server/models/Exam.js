import mongoose, { Schema, model } from "mongoose";

const ExamSchema = new Schema(
  {
    subject: { type: String, required: true },
    date: { type: Date, required: true },
    class: { type: String, ref: "Class", required: true },
  },
  { timestamps: true }
);

const Exam = model("Exam", ExamSchema);

export default Exam;
//Schema.Types.ObjectId
