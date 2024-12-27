import { Router } from "express";
const router = Router();
import Performance from "../models/Performance.js";
import { Parser} from "json2csv";
import PDFDocuments from "pdfkit";


export const getPerformanceDataChild = async (req, res) => {
  const { childId } = req.params;
  try {
    const performanceData = await Performance.find({ userId: childId });
    if (!performanceData) {
      return res.status(404).json({ message: 'Performance data not found' });
    }
    res.status(200).json({ performanceScores: performanceData });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export const getPerformanceDataStudent = async (req, res) => {
  try {
    const { id } = req.params;

    // Query to fetch student's performance data
    const performance = await Performance.findOne({ userId: id });

    if (!performance) {
      return res.status(404).json({ message: "No performance data found for this student." });
    }

    res.status(200).json({ performance });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

export const exportPerformanceDataCSV = async (req, res) => {
  try {
    const { id } = req.params;
    const performance = await Performance.findOne({ userId: id });

    if (!performance) {
      return res.status(404).json({ message: "Performance data not found" });
    }

    const csvFields = ["Subject", "Score", "MaxScore"];
    const csvData = performance.grades.map((grade) => ({
      Subject: grade.subject,
      Score: grade.score,
      MaxScore: grade.maxScore,
    }));

    const parser = new Parser({ fields: csvFields });
    const csv = parser.parse(csvData);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=performance.csv");
    res.status(200).end(csv);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const exportPerformanceAsPDF = async (req, res) => {
  try {
    const { id } = req.params;
    const performance = await Performance.findOne({ userId: id });

    if (!performance) {
      return res.status(404).json({ message: "Performance data not found" });
    }

    const doc = new PDFDocuments();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=performance.pdf");

    doc.pipe(res);

    doc.fontSize(18).text("Student Performance Report", { align: "center" });
    doc.moveDown();

    // Add Grades
    doc.fontSize(14).text("Grades:");
    performance.grades.forEach((grade) => {
      doc.text(`${grade.subject}: ${grade.score}/${grade.maxScore}`);
    });

    // Add Attendance
    doc.moveDown().text("Attendance:");
    doc.text(
      `Days Present: ${performance.attendance.present} / ${performance.attendance.total}`
    );

    // Add Participation
    doc.moveDown().text("Participation:");
    doc.text(`${performance.participation}%`);

    doc.end();
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getBenchmarkData = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch performance for all students
    const performances = await Performance.find();

    // Calculate Class Averages
    const averages = {};
    const subjects = performances[0]?.grades.map((g) => g.subject) || [];
    subjects.forEach((subject) => (averages[subject] = { total: 0, count: 0 }));

    performances.forEach((student) => {
      student.grades.forEach((grade) => {
        averages[grade.subject].total += grade.score;
        averages[grade.subject].count += 1;
      });
    });

    const classAverages = Object.fromEntries(
      Object.entries(averages).map(([subject, { total, count }]) => [
        subject,
        total / count,
      ])
    );

    // Fetch individual student's performance
    const studentPerformance = await Performance.findOne({ userId: id });

    res.status(200).json({ studentPerformance, classAverages });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
