import cron from "node-cron";
import nodemailer from "nodemailer";
import Performance from "../models/Performance.js";
import dotenv from "dotenv";

dotenv.config();

// Configure Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Schedule Notifications
cron.schedule("0 9 * * *", async () => {
  try {
    const students = await Performance.find().populate("userId");

    students.forEach((student) => {
      const { attendance, grades, userId } = student;

      // Attendance Warning
      if ((attendance.present / attendance.total) * 100 < 75) {
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: userId.email,
          subject: "Attendance Warning",
          text: "Your attendance is below 75%. Please improve your attendance.",
        });
      }

      // Grade Warning
      grades.forEach((grade) => {
        if ((grade.score / grade.maxScore) * 100 < 50) {
          transporter.sendMail({
            from: process.env.EMAIL_USER, 
            to: userId.email,
            subject: `Low Performance in ${grade.subject}`,
            text: `Your score in ${grade.subject} is below 50%. Please work on improving.`,
          });
        }
      });
    });
  } catch (error) {
    console.error("Error sending notifications:", error);
  }
});
