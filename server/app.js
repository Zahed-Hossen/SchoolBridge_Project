import express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
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
app.use(cors());
app.use(json());

// MongoDB Connection
connectDB()
  .then(() => {
    // Start the server only after MongoDB is connected
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })

  /**
   * Handles MongoDB connection failure and starts the server without database connectivity.
   * This function is executed when the MongoDB connection attempt throws an error.
   *
   * @param {Error} err - The error object thrown by the MongoDB connection attempt.
   * @returns {void} This function doesn't return a value, but it starts the Express server.
   */

  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Start the server even if MongoDB connection fails
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (without MongoDB)`));
  });

/**
 * Handles the root route of the SchoolBridge API.
 * This function sends a welcome message when the root URL is accessed.
 *
 * @param {Object} req - The request object from Express.js.
 * @param {Object} res - The response object from Express.js.
 * @returns {void} This function doesn't return a value, but sends a response to the client.
 */

//routes: function
app.get('/', (req, res) => {
  res.send('Welcome to SchoolBridge API');
});

// // Use the auth routes
// app.use("/", authRoutes);

// Use the test route
app.use('/api/test', testRoute);

// Use the auth routes
app.use('/api/auth', authRoutes);

// Use the protected routes
app.use('/api/protected', protectedRoutes);
// Log to indicate the end of the script

console.log('End of script');

//Password: Smk8nxR6QDJiejOC