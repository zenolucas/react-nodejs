const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.send('Welcome to contact us page');
});

module.exports = router;
