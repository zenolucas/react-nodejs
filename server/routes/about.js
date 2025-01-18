const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send('Welcome to about us page');
});

module.exports = router;
