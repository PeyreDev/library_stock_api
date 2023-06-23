const connection = require('./config/database');
const express = require('express')
const app = express()
const port = 3000

/*
    Look for let connexion.connect here or in the config/database.js
*/
//connection.connect();

app.listen(port, () => {
    console.log(`Library_stock_api listening on port ${port}`)
})