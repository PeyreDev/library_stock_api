const { connection } = require('./config/database');
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth/auth');
const userRoutes = require('./routes/user/user');
const authorOperationRoutes = require('./routes/operations/author_operation/author_operation');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connection.connect(function(err) {
    if (err) {
      throw new Error('Error connecting to the MySQL server: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/operation/author_operation', authorOperationRoutes);

module.exports = app; // We export app for testing with Jest

app.listen(port, () => {
    console.log(`Library_stock_api listening on port ${port}`)
})

