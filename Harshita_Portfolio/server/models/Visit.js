const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
  ip: { type: String },
  page: { type: String, required: true },
  duration: { type: Number, default: 0 },

  // Keep both structured + readable form
  location: {
    country: { type: String, default: 'Unknown' },
    state: { type: String, default: 'Unknown' },
    label: { type: String, default: 'Unknown' }, // auto-generated human readable
  },

  timestamp: { type: Date, default: Date.now },
});

// 🧠 Middleware to auto-generate `location.label`
VisitSchema.pre('save', function (next) {
  const country = this.location?.country || 'Unknown';
  const state = this.location?.state || 'Unknown';

  // Format as "State, Country" or fallback to "Unknown"
  if (state !== 'Unknown' && country !== 'Unknown') {
    this.location.label = `${state}, ${country}`;
  } else if (country !== 'Unknown') {
    this.location.label = country;
  } else {
    this.location.label = 'Unknown';
  }

  next();
});

module.exports = mongoose.model('Visit', VisitSchema);
