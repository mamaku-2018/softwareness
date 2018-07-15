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

router.get('/stats', (req, res) => {
  db.categoryCompanyGenderCount()
    .then(company => {
      db.categoryCompanyGenderCount()
        .then(gender => {
          res.json({company, gender})
        })
    })
})

module.exports = router
