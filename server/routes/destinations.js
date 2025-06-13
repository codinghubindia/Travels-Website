const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinationsController');

// Get all destinations
router.get('/', destinationsController.getAllDestinations);

// Get a specific destination by ID
router.get('/:id', destinationsController.getDestinationById);

module.exports = router; 