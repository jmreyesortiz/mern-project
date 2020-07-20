const express = require('express');
const router = express.Router();

// @route  Get api/profile
// @desc   Test Route
// @access Public or Private

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
