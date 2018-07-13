const express = require('express')
const router = express.Router()
const db = require('../db/empProfile')
router.use(express.json())

router.get('/:companyId', (req, res) => {
  const companyId = req.params.companyId
  const categories = [
    {name: '',
      roles: [
        {
          name1: '',
          count: '',
          avgYearExp: '',
          femaleCount: '',
          maleCount: '',
          openReqs: '',
          percentLocal: ''
        }
      ]
    }
  ]

  db.getEmpProfiles(companyId)
    .then(list => {
      const result = {
        categories: getCategories(list)
      }
      res.json(result)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

function getCategories (list) {
  const result = []
  const set = new Set()
  list.forEach(item => set.add(item.category))
  for (let category of set.values()) {
    result.push({
      name: category,
      roles: getRoles(list, category)
    })
  }
  return result
}

function getRoles (list, category) {
  console.log(category)
  const result = []
  for (let i = 0; i < list.length; i++) {
    if (category === list[i].category) {
      result.push({
        name: list[i].name,
        count: list[i].count,
        avgYearExp: list[i].avg_years_exp,
        femaleCount: list[i].female_count,
        maleCount: list[i].male_count,
        openReqs: list[i].open_reqs,
        percentLocal: list[i].percent_local
      })
    }
  }
  return result
}

module.exports = router
