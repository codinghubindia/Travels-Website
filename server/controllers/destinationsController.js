const Destination = require('../models/destination');

// Get all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific destination by ID
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findOne({ id: req.params.id });
    
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 