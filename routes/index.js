const express = require('express');

const router = express.Router();

// Routes
// router.use('/users', require('./users'));
router.use('/events', require('./events'));
// router.use('/contacts', require('./contacts'));

module.exports = router;
