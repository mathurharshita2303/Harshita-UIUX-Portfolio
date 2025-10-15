const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: String,
  role: String,
  company: String,
  rating: Number,
  feedback: String,
  verified: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
