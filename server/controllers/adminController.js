import Class from '../models/Class.js';
import Exam from '../models/Exam.js';
import Event from '../models/Event.js';
import Fee from '../models/Fee.js';

export const newClass = async (req, res) => {
  const { name, teacher, students } = req.body;
  try {
    const newClass = new Class({ name, teacher, students });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const updateClass = async (req, res) => {
  const { name, teacher, students } = req.body;
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      { name, teacher, students },
      { new: true },
    );
    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const deleteClass = async (req, res) => {
    try {
      await Class.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Class deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error. Please try again.' });
    }
  };

// Fetch all exams
export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exams', error: error.message });
  }
};

// Add a new exam
export const addNewExams = async (req, res) => {
  try {
    const { subject, date, class: className } = req.body;
    const newExam = new Exam({ subject, date, class: className });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (error) {
    res.status(500).json({ message: 'Error adding exam', error: error.message });
  }
};

// Update an exam
export const updateExams = async (req, res) => {
  try {
    const { id } = req.params;
    const { subject, date, class: className } = req.body;
    const updatedExam = await Exam.findByIdAndUpdate(
      id,
      { subject, date, class: className },
      { new: true }
    );
    if (!updatedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    res.status(200).json(updatedExam);
  } catch (error) {
    res.status(500).json({ message: 'Error updating exam', error: error.message });
  }
};

// Delete an exam
export const deleteExam = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExam = await Exam.findByIdAndDelete(id);
    if (!deletedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    res.status(200).json({ message: 'Exam deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting exam', error: error.message });
  }
};

// Fetch all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Add a new event
export const addNewEvent = async (req, res) => {
  const { name, date, location } = req.body;
  try {
    const newEvent = new Event({ name, date, location });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Update an event
export const updateEvent = async (req, res) => {
  const { name, date, location } = req.body;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { name, date, location },
      { new: true },
    );
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Event deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const getAllFees = async (req, res) => {
  try {
    const fees = await Fee.find().populate('student');
    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const addNewFees = async (req, res) => {
  const { student, amount, status } = req.body;
  try {
    const newFee = new Fee({ student, amount, status });
    await newFee.save();
    res.status(201).json(newFee);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const updateFees = async (req, res) => {
  const { student, amount, status } = req.body;
  try {
    const updatedFee = await Fee.findByIdAndUpdate(
      req.params.id,
      { student, amount, status },
      { new: true },
    );
    res.status(200).json(updatedFee);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const deleteFees = async (req, res) => {
  try {
    await Fee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Fee deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
