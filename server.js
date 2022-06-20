const express = require('express')
let drivers = require('./static/drivers.json')

const app = express()
const port = 5000

app.listen(port, () => `Server running on port ${port}`)