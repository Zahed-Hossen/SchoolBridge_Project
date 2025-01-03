import express from 'express';
import Book from '../models/Book.js';
import {
  getAllBooks,
  borrowBook,
  returnBook
} from '../controllers/libraryController.js';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

const router = express.Router();

// Fetch all books
router.get('/books', getAllBooks);

// Borrow a book
router.put('/books/borrow/:id',  borrowBook);

// Return a book
router.put('/books/return/:id',  returnBook);

export default router;
