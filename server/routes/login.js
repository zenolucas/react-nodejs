const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust the path if needed

// Handle login post request
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the username exists in the database
        const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.render('login', { error: 'Invalid username or password' });
        }

        // Get user from the query result
        const user = rows[0];

        // For now, directly compare the password (no hashing for now)
        if (password !== user.password) {
            return res.render('login', { error: 'Invalid username or password' });
        }

        // Store user session
        req.session.user = { id: user.user_id, username: user.username };

        // Redirect to dashboard if login is successful
        res.redirect('/dashboard');

    } catch (err) {
        console.error(err);
        res.render('login', { error: 'Server error' });
    }
});

module.exports = router;
