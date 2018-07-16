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

router.get('/companies/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  db.categoryCompanyGenderCount(id)
    .then(company => {
      res.json({company})
    })
})

module.exports = router
