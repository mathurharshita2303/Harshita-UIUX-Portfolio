const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  location: { type: String, default: 'Unknown' }
}, { timestamps: true }); // ✅ adds createdAt, updatedAt

module.exports = mongoose.model('Message', MessageSchema);
