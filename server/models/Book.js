import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  title: String,
  author: String,
  category: String,
  genre: String,
  description: String,
  status: {
    type: String,
    enum: ["Available", "Borrowed"],
    default: "Available",
  },
  borrowedBy: {
    type: String,
    ref: "User",
    default: null,
  },
  borrowedAt: {
    type: Date,
    default: null,
  },
  dueDate: {
    type: Date,
    default: null,
  },
  penalty: {
    type: Number,
    default: 0, 
  },
});

const Book = model("Book", BookSchema);

export default Book;
//BorrowedBy: Schema.Types.ObjectId
