const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Library_stock_api listening on port ${port}`)
})