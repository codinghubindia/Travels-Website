const mongoose = require('mongoose');

const TourPackageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
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
  price: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  highlights: {
    type: [String],
    default: []
  },
  itinerary: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

const TourPackage = mongoose.model('TourPackage', TourPackageSchema);
module.exports = TourPackage; 