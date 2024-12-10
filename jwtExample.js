import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config(); // Load environment variables

// Example: Signing a JWT
const token = jwt.sign(
  { userId: 123 }, // Payload
  process.env.JWT_SECRET, // Secret key from .env
  { expiresIn: '1h' } // Options (e.g., expiration)
);

console.log("Generated Token:", token);

// Example: Verifying a JWT
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Decoded Token:", decoded);
} catch (err) {
  console.error("Invalid Token:", err.message);
}