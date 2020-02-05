const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Recipe', recipeSchema);
