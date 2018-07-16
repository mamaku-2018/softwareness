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

module.exports = router
