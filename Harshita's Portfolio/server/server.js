const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const connectDB = require('./config/db');

const app = express();

// CORS setup – allow only frontend origin
app.use(cors({
  origin: '*', // frontend URL
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

app.use(express.json());

// connect DB
connectDB(process.env.MONGO_URI);

// routes
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));



// health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// serve frontend (optional if build exists)
const clientBuildPath = path.join(__dirname, '..', 'dist');
if (require('fs').existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
