const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/searchandfilter");
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;