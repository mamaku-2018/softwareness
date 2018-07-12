const express = require('express')
const db = require('../db/profile')

const router = express.Router()

router.use(express.json())

module.exports = router

// seek type 1: people who find mentors 2: find students
router.get('/profile/:id', (req, res) => {
  const id = req.params.type
  db.getProfileList(id)
    .then(list => {
      res.json(list)
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})