const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcyprt = require;
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route  POST api/users
// @desc   Register user
// @access Public

// We are sending data to this route.

router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'please include email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    console.log(req.body); // object of data sent to this route
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // if they don't include info correctly, it's a bad request
    }

    //destructuring from the request.body -> name email and password
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      // See if the user exists
      // Array of errors in the error
      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already Exists' }] });
      }
      // Get users gravatar ( based on the email)
      const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
      // Encrypt the password
      user = new User({ name, email, avatar, password });

      // Return the jsonwebtoken ( in order to be logged in you need to have that token )

      res.send('User route');
    } catch (err) {
      // If something goes wrong
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
