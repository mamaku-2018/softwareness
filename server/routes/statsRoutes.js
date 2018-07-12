const express = require('express')
// const db = require('../db/companies')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  res.send('good to go')
})

module.exports = router
