const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// ✅ Allow only Netlify and your custom domain
const allowedOrigins = [
  'https://harshitauiuxportfolio.netlify.app',
  'https://www.harshitauiuxportfolio.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// ✅ Connect MongoDB
connectDB(process.env.MONGO_URI);

// ✅ API Routes
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

// ✅ Health check for Railway auto-wake
app.get('/api/health', (req, res) => res.json({ ok: true }));

// ✅ Serve frontend only in production (optional)
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'dist');
  if (fs.existsSync(clientBuildPath)) {
    app.use(express.static(clientBuildPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
  }
}

const PORT = process.env.PORT || 5002;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT} (env: ${process.env.NODE_ENV || 'dev'})`)
);
