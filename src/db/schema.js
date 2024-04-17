const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  customId: { type: String, required: true, unique: true },
  heading: String,
  content: [String]
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item; // Export the model
