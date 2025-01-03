import events from 'events';
events.EventEmitter.defaultMaxListeners = 20;

import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import achievementsRoutes from './routes/achievements.js';
import adminRoutes from './routes/admin.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import feesRoutes from './routes/fees.js';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoute.js';
import profileRoutes from './routes/profile.js';
import libraryRoutes from './routes/library.js';
import performanceRoutes from './routes/performance.js';
import './tasks/notification.js';
import getPerformanceData from './routes/getPerformanceData.js';
import gradeRoutes from './routes/gradesRoutes.js';
import parentRoutes from './routes/parent.js';
import teacherRoutes from './routes/teacher.js';
import studentRoutes from './routes/studentRoutes.js';

config();
const app = express();

// Log environment variables to ensure they are loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('JWT_REFRESH_SECRET:', process.env.JWT_REFRESH_SECRET);

// Configure CORS middleware
app.use(
  cors({
    origin: 'https://schoolbridge-project-frontend.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

// Routes
app.use('/api/achievements', achievementsRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/fees', feesRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/library', libraryRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/getPerformanceData', getPerformanceData);
app.use('/api/grade', gradeRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/parent', parentRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/student', studentRoutes);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the Vite production build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port: ', PORT);
});
