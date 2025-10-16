const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

// Load .env only in non-production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
app.use(express.json());

// Allowed origins
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://harshitauiuxportfolio.netlify.app'
];

let allowedOrigins = defaultOrigins;
if (process.env.ALLOWED_ORIGINS) {
  allowedOrigins = process.env.ALLOWED_ORIGINS.split(',')
    .map(s => s.trim())
    .filter(Boolean)
    .concat(defaultOrigins);
}

// CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    if (/\.render\.com$/.test(new URL(origin).hostname)) return callback(null, true);
    return callback(new Error('CORS policy: Origin not allowed'), false);
  }
}));

// Connect DB
connectDB(process.env.MONGO_URI);

// Routes
app.use('/api/analytics', require('./routes/analyticsRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));

// ✅ Serve frontend (no /dist, serve directly from folder)
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'Harshita_Portfolio', 'Harshita_Portfolio');

  if (fs.existsSync(clientBuildPath)) {
    app.use(express.static(clientBuildPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
  } else {
    console.warn('⚠️ Client build not found at', clientBuildPath);
  }
}

const PORT = process.env.PORT || 5002;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT} (env: ${process.env.NODE_ENV || 'dev'})`)
);

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`Received ${signal}. Closing server...`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
  setTimeout(() => {
    console.error('Forcing shutdown.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
