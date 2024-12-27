import Grades from '../models/Grades.js';

export const getGradesByChildId = async (req, res) => {
  const { childId } = req.params;
  try {
    const grades = await Grades.findOne({ childId });
    if (!grades) return res.status(404).json({ message: 'Grades not found' });
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching grades data', error });
  }
};
