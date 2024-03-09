const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define your schema fields here
  field1: String,
  field2: String,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;