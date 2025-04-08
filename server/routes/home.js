const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session && req.session.user) {
    // User is logged in, redirect to home/dashboard
    return res.redirect('/home');
  } else {
    // Not logged in, redirect to login
    return res.redirect('/login');
  }
});


router.get('/home', (req, res) => {
  res.render('home'); // Render the login.ejs page
});

router.get('/login', (req, res) => {
  res.render('login'); // Render the login.ejs page
});

module.exports = router;
