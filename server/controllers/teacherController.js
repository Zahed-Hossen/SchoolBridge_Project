import Class from '../models/Class.js';
import Task from '../models/Task.js';
import Activity from '../models/Activity.js';
import Attendance from '../models/Attendance.js';
import Assignment from '../models/Assignment.js';
import Performance from '../models/Performance.js';
import Message from '../models/Message.js';
import Grade from '../models/Grade.js';
import Schedule from '../models/Schedule.js';
import Resource from '../models/Resource.js';
import fs from 'fs';
import path from 'path';

export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await find();
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const addNewAssignment = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
      const newAssignment = new Assignment({ title, description, dueDate });
      await newAssignment.save();
      res.status(201).json(newAssignment);
    } catch (error) {
      res.status(500).json({ message: 'Server error. Please try again.' });
    }
  };

export const updateAssignment = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
      const updatedAssignment = await findByIdAndUpdate(
        req.params.id,
        { title, description, dueDate },
        { new: true },
      );
      res.status(200).json(updatedAssignment);
    } catch (error) {
      res.status(500).json({ message: 'Server error. Please try again.' });
    }
  };

export const deleteAssignment = async (req, res) => {
    try {
      await findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Assignment deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error. Please try again.' });
    }
  };
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'Student' });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const getAllAttendanceRecords = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate('student');
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const markAttendance = async (req, res) => {
    const { studentId, status } = req.body;
    try {
      const newAttendance = new Attendance({
        student: studentId,
        status,
        date: new Date(),
      });
      await newAttendance.save();
      const populatedAttendance = await newAttendance
        .populate('student')
        .execPopulate();
      res.status(201).json(populatedAttendance);
    } catch (error) {
      res.status(500).json({ message: 'Server error. Please try again.' });
    }
  };

export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('teacher students');
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const addNewClass = async (req, res) => {
  const { name, teacher, students } = req.body;
  try {
    const newClass = new Class({
      name,
      teacher,
      students: students.split(',').map((id) => id.trim()),
    });
    await newClass.save();
    const populatedClass = await newClass
      .populate('teacher students')
      .execPopulate();
    res.status(201).json(populatedClass);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const updateClass = async (req, res) => {
    const { name, teacher, students } = req.body;
    try {
      const updatedClass = await Class.findByIdAndUpdate(
        req.params.id,
        { name, teacher, students: students.split(',').map((id) => id.trim()) },
        { new: true },
      ).populate('teacher students');
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

export const getPerformanceData = async (req, res) => {
    try {
      const performanceData = await Performance.find({
        userId: req.params.studentId,
      });
      res.status(200).json(performanceData);
    } catch (error) {
      res.status(500).json({ message: 'Server error. Please try again.' });
    }
  };

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const sendMessage = async (req, res) => {
  const { recipient, subject, message } = req.body;
  try {
    const newMessage = new Message({
      recipient,
      subject,
      message,
      date: new Date(),
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.find().populate('student');
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const addNewGrade = async (req, res) => {
  const { student, subject, grade, comments } = req.body;
  try {
    const newGrade = new Grade({
      student,
      subject,
      grade,
      comments,
    });
    await newGrade.save();
    const populatedGrade = await newGrade.populate('student').execPopulate();
    res.status(201).json(populatedGrade);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const getAllScheduleEvents = async (req, res) => {
  try {
    const schedule = await Schedule.find();
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const addNewScheduleEvent = async (req, res) => {
  const { title, date, time, description } = req.body;
  try {
    const newEvent = new Schedule({
      title,
      date,
      time,
      description,
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
// Fetch all resources
export const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error: error.message });
  }
};

// Add a new resource
export const addNewResource = async (req, res) => {
  const { title } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'File is required' });
  }

  try {
    const newResource = new Resource({
      title,
      filePath: file.path,
      fileName: file.originalname,
    });
    await newResource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: 'Error adding resource', error: error.message });
  }
};

// Delete a resource
export const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    // Delete the file from the filesystem
    fs.unlinkSync(path.join(__dirname, '..', resource.filePath));

    await resource.remove();
    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resource', error: error.message });
  }
};
