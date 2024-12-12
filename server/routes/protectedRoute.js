import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Example routes
router.get("/admin", authMiddleware.protect, authMiddleware.authorize("Admin"), (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
});

router.get("/teacher", authMiddleware.protect, authMiddleware.authorize("Teacher"), (req, res) => {
  res.status(200).json({ message: "Welcome, Teacher!" });
});

router.get("/student", authMiddleware.protect, authMiddleware.authorize("Student"), (req, res) => {
  res.status(200).json({ message: "Welcome, Student!" });
});

export default router;