const path = require('path')
const express = require('express')
const routes = require('./routes/companyRoute')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/companies/profile', routes)

module.exports = server
