import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const verifyTokenAndRole = (roles) => {
  return async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    console.log('Token from cookies:', req.cookies.token);
    console.log('Token from headers:', req.headers.authorization);

    if (!token) {
      console.log('No token provided');
      return res
        .status(401)
        .json({ error: true, message: 'Access denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log('Decoded token:', decoded);

      // Convert the string ID to an ObjectId
      const userId = new ObjectId(req.user.id);

      const user = await User.findById(userId);
      if (!user) {
        console.log('User not found');
        return res
          .status(404)
          .json({ error: true, message: 'User not found.' });
      }

      if (!roles.includes(user.role)) {
        console.log('Insufficient permissions');
        return res.status(403).json({
          error: true,
          message: 'Access denied. Insufficient permissions.',
        });
      }

      next();
    } catch (error) {
      console.error('Error in verifyTokenAndRole middleware:', error);
      res.status(400).json({ error: true, message: 'Invalid token.' });
    }
  };
};

export default verifyTokenAndRole;
