const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const sendMail = async ({ to, subject, html, text }) => {
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html
  });
  return info;
};

module.exports = { sendMail };
