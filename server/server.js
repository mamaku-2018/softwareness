const path = require('path')
const express = require('express')
const companyRoutes = require('./routes/companyRoutes')
const authRoutes = require('./routes/authRoutescd')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/companies', companyRoutes)
server.use('/api/v1/auth/register', authRoutes)
module.exports = server
