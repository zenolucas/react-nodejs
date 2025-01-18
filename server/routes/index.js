const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Dynamically load all route files in the 'routes' directory (excluding index.js)
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))
  .forEach((file) => {
    const route = require(path.join(__dirname, file));
    router.use(route);
  });

module.exports = router;
