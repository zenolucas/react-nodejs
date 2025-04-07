const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const db = require('./db'); // Import your DB connection

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files 
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory (default is './views')
app.set('views', path.join(__dirname, 'views'));

// Use centralized router
const routes = require('./routes');
app.use(routes);

// Verify database connection
db.execute('SELECT 1')
  .then(() => {
    console.log('Successfully connected to the database!');
    app.listen(process.env.PORT, () => {
      console.log(`Server is now running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.stack);
  });
