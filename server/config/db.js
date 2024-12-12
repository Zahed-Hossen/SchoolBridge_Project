// server/config/db.js
//import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import mongoose from 'mongoose';
config();

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

//This function connects to MongoDB using the MONGO_URI environment variable. If the connection is successful, it logs a success message. If there's an error, it logs the error and exits the process with a failure status.
// const connectDB = async () => {
//   try {
//     await client.connect();
//     console.log('MongoDB connected successfully');
//   } catch (err) {
//     console.error('MongoDB connection failed:', err);
//     process.exit(1);
//   }
// };

export default connectDB;