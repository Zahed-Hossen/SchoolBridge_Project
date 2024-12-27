import Achievement from '../models/Achievement.js';

// Get Achievements by Child ID
export const getAchievements = async (req, res) => {
  try {
    const { childId } = req.query;
    if (!childId) {
      return res.status(400).json({ message: 'Child ID is required' });
    }
    const achievements = await Achievement.find({ childId }).sort({ date: -1 });
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching achievements', error: error.message });
  }
};

// Get Achievement by ID
export const getAchievementById = async (req, res) => {
  try {
    const { id } = req.params;
    const achievement = await Achievement.findById(id);
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.status(200).json(achievement);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching achievement', error: error.message });
  }
};

// Add New Achievement
export const addAchievement = async (req, res) => {
  try {
    const { childId, title, description, badgeIcon } = req.body;
    if (!childId || !title || !description) {
      return res.status(400).json({ message: 'Child ID, title, and description are required' });
    }
    const newAchievement = new Achievement({ childId, title, description, badgeIcon });
    await newAchievement.save();
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(500).json({ message: 'Error adding achievement', error: error.message });
  }
};

// Update Achievement
export const updateAchievement = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, badgeIcon } = req.body;
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      id,
      { title, description, badgeIcon },
      { new: true }
    );
    if (!updatedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.status(200).json(updatedAchievement);
  } catch (error) {
    res.status(500).json({ message: 'Error updating achievement', error: error.message });
  }
};

// Delete Achievement
export const deleteAchievement = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAchievement = await Achievement.findByIdAndDelete(id);
    if (!deletedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.status(200).json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting achievement', error: error.message });
  }
};
