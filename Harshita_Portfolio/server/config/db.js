const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    if (!uri) {
      throw new Error('MONGO_URI not provided');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
};

module.exports = connectDB;
