const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extends: true }))

server.listen(port, function() {
    console.log(`BACKEND is running in port ${port}.`)   
})

module.exports = server