const { connection, initDatabase } = require('./config/database');
const express = require('express')
const app = express()
const port = 3000

const authRoutes = require('./routes/auth/auth');
const userRoutes = require('./routes/user/user');

connection.connect(function(err) {
    if (err) {
      throw new Error('Error connecting to the MySQL server: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// We export app for testing
module.exports = app;

app.listen(port, () => {
    console.log(`Library_stock_api listening on port ${port}`)
})

