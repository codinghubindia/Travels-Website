const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  highlights: {
    type: [String],
    default: []
  },
  duration: {
    type: String,
    required: true
  },
  bestTime: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Destination = mongoose.model('Destination', DestinationSchema);
module.exports = Destination; 