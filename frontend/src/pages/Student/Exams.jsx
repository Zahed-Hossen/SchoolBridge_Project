import { useState } from "react";
import {
  Container,
  Title,
  ExamTable,
  TableHeader,
  TableRow,
  TableCell,
  ChartContainer,
} from "./ExamStyles";

import { Line } from "react-chartjs-2";
import "chart.js/auto";
import StudentLayout from '../../components/Student/StudentLayout';


const Exams = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const examSchedule = [
    { subject: "Mathematics", date: "2024-04-10", time: "10:00 AM", status: "Upcoming" },
    { subject: "Physics", date: "2024-04-12", time: "2:00 PM", status: "Upcoming" },
    { subject: "Chemistry", date: "2024-04-05", time: "9:00 AM", status: "Completed" },
    { subject: "English", date: "2024-04-02", time: "11:00 AM", status: "Completed" },
  ];

  const examPerformance = [
    { subject: "Mathematics", score: 85 },
    { subject: "Physics", score: 78 },
    { subject: "Chemistry", score: 92 },
    { subject: "English", score: 88 },
  ];

  const filteredExams = examSchedule.filter(
    (exam) =>
      (filter === "All" ? true : exam.status === filter) &&
      exam.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExams = [...filteredExams].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const nextExam = examSchedule.find((exam) => exam.status === "Upcoming");

  const chartData = {
    labels: examPerformance.map((exam) => exam.subject),
    datasets: [
      {
        label: "Exam Scores",
        data: examPerformance.map((exam) => exam.score),
        fill: false,
        borderColor: "#0f2f42",
        backgroundColor: "#4fc3f7",
        pointBorderColor: "#0f2f42",
        tension: 0.4,
      },
    ],
  };

  const downloadResults = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Subject,Score\n" +
      examPerformance.map((exam) => `${exam.subject},${exam.score}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "exam_results.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
    <StudentLayout>
    <Container>
      <Title>Exams</Title>

      {nextExam && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#ffecb3",
            color: "#6d4c41",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          Upcoming Exam: {nextExam.subject} on {nextExam.date} at {nextExam.time}
        </div>
      )}

      <input
        type="text"
        placeholder="Search subject..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Upcoming")}>Upcoming</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSortOrder("asc")}>Sort by Date ↑</button>
        <button onClick={() => setSortOrder("desc")}>Sort by Date ↓</button>
      </div>

      <ExamTable>
        <thead>
          <TableRow>
            <TableHeader>Subject</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sortedExams.length > 0 ? (
            sortedExams.map((exam, index) => (
              <TableRow key={index}>
                <TableCell>{exam.subject}</TableCell>
                <TableCell>{exam.date}</TableCell>
                <TableCell>{exam.time}</TableCell>
                <TableCell status={exam.status}>{exam.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <tr>
              <TableCell colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No exams found!
              </TableCell>
            </tr>
          )}
        </tbody>
      </ExamTable>

      <h3>Performance</h3>
      <ChartContainer>
        <Line data={chartData} options={{ responsive: true }} />
      </ChartContainer>

      <button
        onClick={downloadResults}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0f2f42",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Download Results
      </button>
    </Container>
    </StudentLayout>
    </>
  );
};

export default Exams;
