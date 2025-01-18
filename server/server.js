const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();
const path = require('path');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,         
    database: process.env.DB_NAME,     
    user: process.env.DB_USER,         
    password: process.env.DB_PASSWORD  
});

const app = express();

app.use(bodyParser.urlencoded({extened: true}));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// serve public files 
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory (default is './views')
app.set('views', path.join(__dirname, 'views'));

// Use centralized router
const routes = require('./routes');
app.use(routes);

// first connects to the database, then if connection is successful, server starts listening for requests.
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }

    console.log('Successfully connected to database!');
    app.listen(process.env.PORT, process.env.DB_HOST, () => console.info(`Server is now running on port ` + process.env.PORT));

});