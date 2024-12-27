import Attendance from '../models/Attendance.js'; // Mongoose model

// Get attendance for a specific student from the database
export const getAttendanceByStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const attendance = await Attendance.find({ student: studentId });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: "Error fetching attendance data" });
  }
};

// Get filtered dummy attendance data
export const getFilteredAttendance = (req, res) => {
  const attendanceData = [
    { date: "2024-04-01", status: "Present" },
    { date: "2024-04-02", status: "Absent" },
    { date: "2024-04-03", status: "Present" },
    { date: "2024-04-04", status: "Present" },
    { date: "2024-04-05", status: "Absent" },
    { date: "2024-04-06", status: "Present" },
  ];

  const { startDate, endDate } = req.query;
  const filteredData = attendanceData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
  });

  res.status(200).json(filteredData);
};
