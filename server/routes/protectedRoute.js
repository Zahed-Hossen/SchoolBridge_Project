import express from "express";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Example routes
router.get("/admin/dashboard", protect, authorize("Admin"), (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
});

router.get("/teacher/dashboard", protect, authorize("Teacher"), (req, res) => {
  res.status(200).json({ message: "Welcome, Teacher!" });
});

router.get("/student/dashboard", protect, authorize("Student"), (req, res) => {
  res.status(200).json({ message: "Welcome, Student!" });
});

router.get('/parent/dashboard', protect, authorize('Parent'), (req, res) => {
  res.status(200).json({ message: 'Welcome, Parent!' });
});

export default router;
