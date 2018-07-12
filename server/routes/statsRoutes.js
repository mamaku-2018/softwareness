const express = require('express')
const db = require('../db/stats')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.categoryMaleFemaleCount()
    .then(gender => {
      db.catetoryLocalForeignCount()
        .then(local => {
          res.json({gender, local})
        })
    })
})

module.exports = router
