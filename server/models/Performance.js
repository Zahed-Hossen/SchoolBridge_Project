import { Schema, model } from "mongoose";

const PerformanceSchema = new Schema({
  userId: { type: String, ref: "User", required: true },
  grades: [
    {
      subject: { type: String, required: true },
      score: { type: Number, required: true },
      maxScore: { type: Number, required: true },
    },
  ],
  attendance: {
    present: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  participation: { type: Number, required: true }, // Percentage
  performanceTrend: [Number], // Monthly performance scores
});

export default model("Performance", PerformanceSchema);
//UserId: Schema.Types.ObjectId
