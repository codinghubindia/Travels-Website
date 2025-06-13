const express = require('express');
const router = express.Router();
const packagesController = require('../controllers/packagesController');

// Get all packages
router.get('/', packagesController.getAllPackages);

// Get top selling packages
router.get('/top-selling', packagesController.getTopSellingPackages);

// Get a specific package by ID
router.get('/:id', packagesController.getPackageById);

module.exports = router; 