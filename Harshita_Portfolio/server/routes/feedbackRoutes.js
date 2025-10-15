const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const { sendMail } = require('../utils/emailService');

router.post('/', async (req, res) => {
  try {
    const { name, role, company, rating, feedback } = req.body;
    const newFeedback = new Feedback({ name, role, company, rating, feedback });
    await newFeedback.save();

    // send email to owner
    const mailHtml = `
      <h2>New Feedback Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Role:</b> ${role || 'N/A'}</p>
      <p><b>Company:</b> ${company || 'N/A'}</p>
      <p><b>Rating:</b> ${rating}/5</p>
      <p><b>Feedback:</b></p>
      <blockquote>${feedback}</blockquote>
    `;
    await sendMail({
          to: process.env.EMAIL_USER,
          subject: `📝 New Feedback from ${name}`,
          html: `<h2>New Feedback Received</h2>
                 <p><b>Name:</b> ${name}</p>
                 <p><b>Role:</b> ${role || 'N/A'}</p>
                 <p><b>Company:</b> ${company || 'N/A'}</p>
                 <p><b>Rating:</b> ${rating}/5</p>
                 <p><b>Feedback:</b></p><blockquote>${feedback}</blockquote>`,
          text: feedback
    });

    res.json({ success: true, msg: 'Feedback saved & email sent!' });
  } catch (err) {
    console.error('Feedback error:', err);
    res.status(500).json({ success: false, msg: 'Error saving feedback' });
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 }); // latest first
    res.json(feedbacks);
  } catch (err) {
    console.error('Error fetching feedbacks:', err);
    res.status(500).json({ success: false, msg: 'Error fetching feedbacks' });
  }
});

module.exports = router;
