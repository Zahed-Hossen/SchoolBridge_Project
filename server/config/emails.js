import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE, // Add welcome email template
} from './emailTemplates.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email service:', error);
  } else {
    console.log('Email service ready:', success);
  }
});

export const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email',
    html: VERIFICATION_EMAIL_TEMPLATE.verificationToken,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully', response);
  } catch (error) {
    console.error('Error sending verification email', error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Our Service',
    html: WELCOME_EMAIL_TEMPLATE.replace('{name}', name),
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully', response);
  } catch (error) {
    console.error('Error sending welcome email', error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetRequestEmail = async (email, resetURL) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Reset Your Password',
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log('Password reset request email sent successfully', response);
  } catch (error) {
    console.error('Error sending password reset request email', error);
    throw new Error(`Error sending password reset request email: ${error}`);
  }
};

export const sendPasswordResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Successful',
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log('Password reset success email sent successfully', response);
  } catch (error) {
    console.error('Error sending password reset success email', error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
