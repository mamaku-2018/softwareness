const path = require('path')
const express = require('express')
const companyRoutes = require('./routes/companyRoutes')
// const authRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/auth')
const passport = require('passport')

const server = express()
server.use(passport.initialize())
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/companies', companyRoutes)
server.use('/api/v1/auth', authRoutes)
module.exports = server
