const mongoose = require('mongoose');

const customSearchSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  filters: { type: Object, required: true },
});

module.exports = mongoose.model('CustomSearch', customSearchSchema);