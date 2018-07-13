const path = require('path')
const express = require('express')
const companyRoutes = require('./routes/companyRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/companies', companyRoutes)

module.exports = server
