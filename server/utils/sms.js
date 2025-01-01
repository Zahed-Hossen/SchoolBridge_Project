import twilio from 'twilio';

const client = twilio(process.env.TWILIO_API_KEY_SID, process.env.TWILIO_API_KEY_SECRET, {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
});

const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber.startsWith('+')) {
    return `+880${phoneNumber.slice(1)}`;
  }
  return phoneNumber;
};

const generateVerificationMessage = (otp) => {
  return `Your verification code is ${otp}. Please enter this code to verify your phone number.`;
};

const sendSMS = async (phoneNumber, otp) => {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  const message = generateVerificationMessage(otp);
  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: formattedPhoneNumber,
  });
};

export { sendSMS };
