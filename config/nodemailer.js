// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail', // You can use other services like Yahoo, etc.
//   auth: {
//     user: process.env.EMAIL_USER, // Replace with your email
//     pass: process.env.EMAIL_PASS, // Replace with your email password or app-specific password
//   },
// });

// // Verify connection
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('Error connecting to email service:', error);
//   } else {
//     console.log('Email service ready:', success);
//   }
// });

// export default transporter;