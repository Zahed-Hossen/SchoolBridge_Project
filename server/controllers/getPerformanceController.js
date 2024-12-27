// Mock data
const performanceData = {
  performanceScores: [85, 90, 75, 80, 95],
  achievements: ["Best Student Award", "Debate Champion", "Sports Day Winner"]
};

// Get performance data
export const getPerformanceData = (req, res) => {
  res.json(performanceData);
};

// Submit feedback
export const submitFeedback = (req, res) => {
  const { feedback } = req.body;
  console.log('Received feedback:', feedback);
  res.status(200).send('Feedback submitted successfully!');
};
