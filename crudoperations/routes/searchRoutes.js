const express = require('express');
const router = express.Router();
const User = require('../models/User');


// Search Users Based on Filters
router.post('/search', async (req, res) => {
  try {
    const { age, profession, location, religion } = req.body;

    // Build dynamic query
    const query = {};
    if (age) query.age = { $gte: age.min, $lte: age.max };
    if (profession) query.profession = profession;
    if (location) query.location = location;
    if (religion) query.religion = religion;

    // Fetch matching users
    const users = await User.find(query);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Save Custom Search
router.post('/save-search', async (req, res) => {
  try {
    const { userId, name, filters } = req.body;
    const customSearch = new CustomSearch({ userId, name, filters });
    await customSearch.save();
    res.status(201).json(customSearch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Saved Searches
router.get('/saved-searches/:userId', async (req, res) => {
  try {
    const savedSearches = await CustomSearch.find({ userId: req.params.userId });
    res.status(200).json(savedSearches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Saved Search
router.delete('/saved-search/:id', async (req, res) => {
  try {
    const deletedSearch = await CustomSearch.findByIdAndDelete(req.params.id);
    if (!deletedSearch) return res.status(404).json({ error: 'Search not found' });
    res.json({ message: 'Search deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
