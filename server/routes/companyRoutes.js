const express = require('express')
const db = require('../db/companies')

const router = express.Router()

router.use(express.json())

router.post('/add', (req, res) => {
  const company = req.body
  db.addCompany(company)
    .then((id) => {
      res.json({newId: id})
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to save company')
    })
})

module.exports = router
