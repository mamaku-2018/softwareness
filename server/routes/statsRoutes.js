const express = require('express')
const db = require('../db/stats')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.categoryMaleFemaleCount()
    .then(counts => res.json(counts))
})

module.exports = router
