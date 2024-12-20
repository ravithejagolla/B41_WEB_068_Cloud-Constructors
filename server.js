const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const connectDB = require('./config/db');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
connectDB();
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/searchandfilter", {
    dbName: 'matchme', // Ensure the database name is correct
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define a simple route (Optional, for testing)
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
