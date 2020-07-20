const express = require('express');
const router = express.Router();

// @route  Get api/posts
// @desc   Test Route
// @access Public or Private

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
