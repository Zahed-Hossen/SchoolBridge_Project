import express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import path from 'path';
import testRoute from './routes/testRoute.js'; // Import the test route
import connectDB from './config/db.js'; // Import the connectDB function
import authRoutes from './routes/authRoutes.js'; // Import the auth routes
import protectedRoutes from './routes/protectedRoute.js'; // Import the protected routes

config();
const app = express();

// Log environment variables to ensure they are loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from Vite's development server
app.use(json());

// MongoDB Connection
connectDB()
  .then(() => {
    // Start the server only after MongoDB is connected
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    // Start the server even if MongoDB connection fails
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT} without MongoDB connection`));
  });

// Routes
app.use('/api/test', testRoute); // Use the test route
app.use('/api/auth', authRoutes); // Use the auth routes
app.use('/api/protected', protectedRoutes); // Use the protected routes

// Serve the Vite production build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}