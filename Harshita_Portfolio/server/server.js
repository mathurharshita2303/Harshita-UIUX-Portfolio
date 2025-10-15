const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

// Load .env only in non-production to avoid accidentally using local secrets on Render
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

app.use(express.json());

// Build allowed origins from env or sensible defaults
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://harshitauiuxportfolio.netlify.app'
];

let allowedOrigins = defaultOrigins;
if (process.env.ALLOWED_ORIGINS) {
  allowedOrigins = process.env.ALLOWED_ORIGINS.split(',').map(s => s.trim()).filter(Boolean).concat(defaultOrigins);
}

// CORS middleware that allows requests from allowed origins or when origin is missing (server-to-server)
app.use(cors({
  origin: function(origin, callback){
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    // allow subdomains of render.com (optional)
    if (/\.render\.com$/.test(new URL(origin).hostname)) return callback(null, true);
    return callback(new Error('CORS policy: Origin not allowed'), false);
  }
}));

// Connect to MongoDB (uses process.env.MONGO_URI)
connectDB(process.env.MONGO_URI);

// require routes
app.use('/api/analytics', require('./routes/analyticsRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Serve client build when present (works when frontend build is placed in parent dist/)
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'dist');
  if (fs.existsSync(clientBuildPath)) {
    app.use(express.static(clientBuildPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
  } else {
    console.warn('Client build not found at', clientBuildPath);
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
  // Force exit after timeout
  setTimeout(() => {
    console.error('Forcing shutdown.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
