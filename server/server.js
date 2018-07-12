const path = require('path')
const express = require('express')
const companyRoutes = require('./routes/companyRoutes')
const statsRoutes = require('./routes/statsRoutes')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/companies', companyRoutes)
server.use('/stats', statsRoutes)

module.exports = server
