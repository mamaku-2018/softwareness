const express = require('express')
const db = require('../db/companies')
const dbProfile = require('../db/employeeProfile')
const router = express.Router()

router.post('/add', (req, res) => {
  const {name, websiteUrl, countryId} = req.body
  const company = {
    name: name,
    country_id: countryId,
    website_url: websiteUrl
  }
  db.addCompany(company)
    .then(id => {
      res.json({newId: id})
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to save company')
    })
})

router.get('/', (req, res) => {
  db.getAllCompanies()
    .then(companies => {
      res.json(companies)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find companies')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getCompany(id)
    .then(company => {
      res.json(company)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find company')
    })
})

router.get('/profile/:id', (req, res) => {
  const id = req.params.id

  dbProfile.getEmpProfiles(id)
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

router.post('/profile/:id', (req, res) => {
  const id = Number(req.params.id)
  const body = req.body
  body.companyId = id
  body.timestamp = getDate()
  const profile = camelToRail(body)
  db.addProfile(profile)
    .then(id => {
    // returns fully fleshed object to the display company profile page, after edit is hit
      body.id = id[0]
      res.json(body)
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to send to database')
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

function getDate () {
  const date = new Date()
  const dd = date.getDate()
  const mm = date.getMonth() + 1
  const yyyy = date.getFullYear()
  const datestr = `${yyyy}-${mm}-${dd}`
  return datestr
}

function getRoles (list, category) {
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

// Takes an object that has camelCase keys. returns an object with rail_case keys
function camelToRail (obj) {
  const keyArr = Object.keys(obj)
  let i = 0
  /* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
  String.prototype.toUnderscore = function () {
    return this.replace(/([A-Z])/g, function ($1) { return '_' + $1.toLowerCase() })
  }
  for (let j = 0; j < keyArr.length; j++) {
    keyArr[j] = keyArr[j].toUnderscore()
  }
  for (let prop in obj) {
    let val = obj[prop]
    delete obj[prop]
    obj[keyArr[i]] = val
    i += 1
  }
  return obj
}
module.exports = router
