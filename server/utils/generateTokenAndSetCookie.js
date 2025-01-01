// Generate JWT and set as cookie
import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (res, id, role, isVerified) => {
  const token = jwt.sign({ id, role, isVerified }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  // Set token as a cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
