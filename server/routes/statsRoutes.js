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
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find data')
    })
})

router.get('/companies/:id', (req, res) => {
  const id = req.params.id
  db.categoryCompanyGenderCount(id)
    .then(company => {
      res.json(company)
    })
})

module.exports = router
