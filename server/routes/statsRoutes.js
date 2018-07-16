const express = require('express')
const db = require('../db/stats')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.categoryMaleFemaleCount()
    .then(gender => {
      db.catetoryLocalForeignCount()
        .then(local => {
          db.categoryCompanyGenderCount()
            .then(company => {
              res.json({gender, local, company})
            })
        })
    })
})

module.exports = router
