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
router.get('/:childId', getPerformanceDataChild);

// Fetch student performance data
router.get("/student/:id", getPerformanceDataStudent);
// Export Performance Data as CSV
router.get("/export/csv/:id", exportPerformanceDataCSV );

// Export Performance Data as PDF
router.get("/export/pdf/:id",  exportPerformanceAsPDF );

// Fetch class benchmark data
router.get('/benchmark/:id', getBenchmarkData);

export default router;

