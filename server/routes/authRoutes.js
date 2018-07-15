const express = require('express')

const db = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

router.post('/register', register, token.issue)
function register (req, res, next) {
  db.userExists(req.body.email)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      db.createUser(req.body.firstName, req.body.surName, req.body.hash, req.body.email)
        .then(() => next())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

router.get('/login/:email', token.decode, (req, res) => {
  res.json({
    email: req.user.email
  })
})

module.exports = router
