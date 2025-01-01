import { Router } from "express";
const router = Router();
import verifyTokenAndRole from "../middleware/VerifyTokenAndRole.js";

import {
  getPerformanceDataChild,
  getPerformanceDataStudent,
  exportPerformanceDataCSV,
  exportPerformanceAsPDF,
  getBenchmarkData
} from '../controllers/performanceController.js';


// Fetch performance data for a child
router.get('/:childId', verifyTokenAndRole(['Parent']), getPerformanceDataChild);

// Fetch student performance data
router.get("/student/:id", verifyTokenAndRole(['Student']), getPerformanceDataStudent);
// Export Performance Data as CSV
router.get("/export/csv/:id", verifyTokenAndRole(['Student']), exportPerformanceDataCSV );

// Export Performance Data as PDF
router.get("/export/pdf/:id", verifyTokenAndRole(['Student']), exportPerformanceAsPDF );

// Fetch class benchmark data
router.get('/benchmark/:id', verifyTokenAndRole(['Student']), getBenchmarkData);

export default router;

