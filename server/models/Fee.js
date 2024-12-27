import mongoose, { Schema, model } from "mongoose";

const FeeSchema = new Schema(
  {
    student: { type: String, ref: "User", required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true, enum: ["Paid", "Pending"], default: "Pending" },
  },
  { timestamps: true }
);

const Fee = model("Fee", FeeSchema);

export default Fee;
//Schema.Types.ObjectId
