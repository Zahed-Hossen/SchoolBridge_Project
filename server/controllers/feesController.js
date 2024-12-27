// Sample fee data
const fees = [
  { id: 1, studentId: '1', name: 'Tuition Fee', amount: 500, status: 'Pending', dueDate: '2023-10-01' },
  { id: 2, studentId: '1', name: 'Library Fee', amount: 50, status: 'Paid', dueDate: '2023-09-15' },
  { id: 3, studentId: '2', name: 'Lab Fee', amount: 100, status: 'Pending', dueDate: '2023-10-10' },
];

// Get fees for a specific student with optional status and date filters
export const getFeesByStudent = (req, res) => {
  try {
    const { status, month, year } = req.query;
    const studentId = req.params.studentId;

    // Filter fees based on query parameters
    let filteredFees = fees.filter(fee => fee.studentId === studentId);

    if (status) {
      filteredFees = filteredFees.filter(fee => fee.status === status);
    }

    if (month && year) {
      filteredFees = filteredFees.filter(fee => fee.dueDate.startsWith(`${year}-${month}`));
    } else if (year) {
      filteredFees = filteredFees.filter(fee => fee.dueDate.startsWith(year));
    }

    res.status(200).json(filteredFees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fees', error: error.message });
  }
};
