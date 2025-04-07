const express = require('express');
const router = express.Router();

// Redirect root ("/") to "/login"
router.get('/', (req, res) => {
  res.redirect('/login');  // Redirects to the login page
});

// Add other routes if necessary
// For example, the login page route
router.get('/login', (req, res) => {
  res.render('login'); // Render the login.ejs page
});

module.exports = router;
