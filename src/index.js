const connection = require('./config/database');
const express = require('express')
const app = express()
const port = 3000

const authRoutes = require('./routes/auth/auth');
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Library_stock_api listening on port ${port}`)
})