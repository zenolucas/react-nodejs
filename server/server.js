const express = require('express');
const session = require('express-session');  // Import the session middleware
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');  // Import routes from the centralized router
require('dotenv').config();

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory (where EJS files are located)
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware configuration
app.use(session({
  secret: 'your_secret_key',  // Change this to a secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true if you're using https
}));

// Use the centralized router
app.use(routes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
