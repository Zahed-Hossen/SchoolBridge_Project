import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

export { sendEmail };