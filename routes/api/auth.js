const express = require('express');

const router = express.Router();

// @route  Get api/auth
// @desc   Test Route
// @access Public
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;
