const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  allCompanies,
  getCompany,
  newCompany
}

function allCompanies () {
  const db = knex
  return db('companies').select()
}

function getCompany (id) {
  const db = knex
  return db('companies')
    .where('id', id).select()
}

function newCompany (company) {
  const db = knex
  return db('companies').insert(company)
}
