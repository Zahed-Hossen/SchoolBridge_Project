import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from './emailTemplates.js';

import twilio from 'twilio';

const client = twilio(process.env.TWILIO_API_KEY_SID, process.env.TWILIO_API_KEY_SECRET, {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
});

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
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      '{verificationCode}',
      verificationToken,
    ),
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully', response);
  } catch (error) {
    console.error('Error sending verification email', error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};



 const formatPhoneNumber = (phoneNumber) => {

  if (!phoneNumber.startsWith('+')) {
    return `+880${phoneNumber.slice(1)}`;
  }
  return phoneNumber;
};

export const sendSMS = async (phoneNumber, message) => {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: formattedPhoneNumber,
  });
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
