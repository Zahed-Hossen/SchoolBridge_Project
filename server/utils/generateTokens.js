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




import jwt from 'jsonwebtoken';

export const generateAccessToken = (id, role, isVerified) => {
  return jwt.sign({ id, role, isVerified }, process.env.JWT_SECRET, {
    expiresIn: '15m', // Short-lived access token
  });
};

export const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '7d', // Long-lived refresh token
  });
};
