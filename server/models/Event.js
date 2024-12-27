import mongoose, { Schema, model } from "mongoose";

const EventSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = model("Event", EventSchema);

export default Event;
