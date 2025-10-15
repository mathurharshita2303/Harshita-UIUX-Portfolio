const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { sendMail } = require('../utils/emailService');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // send email to owner
    const mailHtml = `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Subject:</b> ${subject || 'N/A'}</p>
      <p><b>Message:</b></p>
      <blockquote>${message}</blockquote>
    `;
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact: ${subject || 'No Subject'} from ${name}`,
      html: mailHtml,
      text: message
    });

    res.json({ success: true, msg: 'Message saved & email sent!' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ success: false, msg: 'Error saving message' });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Error fetching messages' });
  }
});

module.exports = router;
