import Grade from '../models/Grade.js';
import Performance from '../models/Performance.js';

// Sample parent and children data
const parentInfo = {
  parent: {
    id: "1",
    name: "Mark Johnson",
    email: "mark.johnson@example.com",
    contact: "987-654-3210",
    address: "123 Main Street",
    profilePicture: "/images/mark_johnson.jpg"
  },
  children: [
    {
      id: "1",
      name: "Sarah Johnson",
      grade: "9th",
      rollNumber: "B5678",
      profilePicture: "/images/sarah_johnson.jpg"
    },
    {
      id: "2",
      name: "Jake Johnson",
      grade: "6th",
      rollNumber: "C8901",
      profilePicture: "/images/jake_johnson.jpg"
    }
  ]
};

export const getParentInfo = (req, res) => {
  res.setHeader('Content-Type', 'application/json'); 
  res.json(parentInfo);
};

// Get Grades by Child ID
export const getGradesByChildId = async (req, res) => {
  const { childId } = req.params;
  try {
    const grades = await Grade.findOne({ childId });
    if (!grades) return res.status(404).json({ message: 'Grades not found' });
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching grades data', error });
  }
};

// Get Performance by Child ID
export const getPerformanceByChildId = async (req, res) => {
  const { childId } = req.params;
  try {
    const performance = await Performance.findOne({ childId });
    if (!performance) return res.status(404).json({ message: 'Performance not found' });
    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching performance data', error });
  }
};
