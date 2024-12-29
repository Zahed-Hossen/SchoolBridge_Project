import Book from '../models/Book.js';

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const borrowBook = async (req, res) => {
  const { userId } = req.body;

  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.status === 'Borrowed') {
      return res
        .status(400)
        .json({ message: 'Book is already borrowed by someone else.' });
    }

    // Set due date: 7 days from today
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    book.status = 'Borrowed';
    book.borrowedBy = userId;
    book.borrowedAt = new Date();
    book.dueDate = dueDate;

    await book.save();

    res.status(200).json({ message: 'Book borrowed successfully', book });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.status !== 'Borrowed') {
      return res.status(400).json({ message: 'Book is not currently borrowed.' });
    }

    // Calculate penalty if overdue
    const currentDate = new Date();
    let penalty = 0;

    if (book.dueDate && currentDate > book.dueDate) {
      const overdueDays = Math.ceil(
        (currentDate - book.dueDate) / (1000 * 60 * 60 * 24)
      );
      penalty = overdueDays * 5; 
    }

    book.status = 'Available';
    book.borrowedBy = null;
    book.borrowedAt = null;
    book.dueDate = null;
    book.penalty = penalty;

    await book.save();

    res.status(200).json({
      message: `Book returned successfully${penalty > 0 ? ` with a penalty of $${penalty}` : ''}`,
      book,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
