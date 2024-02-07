////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
router.get('/signup', (req, res) => {
  res.render('users/Signup.jsx');
});

router.post('/signup', async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

  User.create(req.body)
    .then(user => res.redirect('/users/login'))
    .catch(err => {
      console.error(err);
      res.status(400).json({ err });
    });
});

router.get('/login', (req, res) => {
  res.render('users/Login.jsx');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(async user => {
      if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          req.session.username = username;
          req.session.loggedIn = true

          res.redirect('/fruits');
        } else {
          res.status(400).json({ error: 'password does not match' });
        }
      } else {
        res.status(400).json({ error: 'user does not exist' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({ err });
    });
});

router.get('/logout', (req, res) => {
  req.session.destroy(err => res.redirect('/'))
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;