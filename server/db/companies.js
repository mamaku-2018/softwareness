var environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getAllCompanies,
  getCompany,
  addCompany
}

function getAllCompanies (db = knex) {
  return db('companies')
    .select('id', 'name', 'website_url as websiteUrl', 'country_id as countryId')
    .orderBy('name', 'asc')
}

function getCompany (id, db = knex) {
  return db('companies')
    .where('id', id)
    .select('id', 'name', 'website_url as websiteUrl', 'country_id as countryId')
    .first()
}

function addCompany (company, db = knex) {
  return db('companies')
    .insert(company)
    .then(companyId => companyId[0])
}
