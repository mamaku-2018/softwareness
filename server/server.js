const path = require('path')
const express = require('express')
const companyRoutes = require('./routes/companyRoutes')
const statsRoutes = require('./routes/statsRoutes')
const authRoutes = require('./routes/authRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/companies', companyRoutes)
server.use('/api/v1/stats', statsRoutes)
server.use('/api/v1/auth', authRoutes)

module.exports = server
