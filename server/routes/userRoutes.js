const express = require('express')
const db = require('../db/users')

const router = express.Router()
router.use(express.json())

router.post('/register', (req, res) => {
  const email = req.body.user.email
  db.userExists(email)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      db.createUser(req.body.firstName, req.body.surName, req.body.hash, req.body.email)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
})

module.exports = router
