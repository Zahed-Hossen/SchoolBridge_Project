// // Generate JWT and set as cookie
// import jwt from 'jsonwebtoken';

// export const generateTokenAndSetCookie = (res, id, role, isVerified) => {
//   const token = jwt.sign({ id, role, isVerified }, process.env.JWT_SECRET, {
//     expiresIn: '7d',
//   });

//   // Set token as a cookie
//   res.cookie('token', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//   });

//   return token;
// };








import { generateAccessToken, generateRefreshToken } from './generateTokens.js';

export const generateTokenAndSetCookie = (res, id, role, isVerified) => {
  const accessToken = generateAccessToken(id, role, isVerified);
  const refreshToken = generateRefreshToken(id);

  // Set access token as a cookie
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  // Set refresh token as a cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return { accessToken, refreshToken };
};
