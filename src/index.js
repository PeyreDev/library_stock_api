const connection = require('./config/database');
const express = require('express')
const app = express()
const port = 3000

const authRoutes = require('./routes/auth/auth');
const userRoutes = require('./routes/user/user');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// We export app for testing
module.exports = app;

app.listen(port, () => {
    console.log(`Library_stock_api listening on port ${port}`)
})