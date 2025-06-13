const TourPackage = require('../models/tourPackage');

// Get all tour packages
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await TourPackage.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get top selling tour packages
exports.getTopSellingPackages = async (req, res) => {
  try {
    const topSellingPackages = await TourPackage.find();
    res.status(200).json(topSellingPackages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific package by ID
exports.getPackageById = async (req, res) => {
  try {
    const tourPackage = await TourPackage.findOne({ id: req.params.id });
    
    if (!tourPackage) {
      return res.status(404).json({ message: 'Tour package not found' });
    }
    
    res.status(200).json(tourPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 