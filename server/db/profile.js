const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports= {
  addProfile
}

function addProfile (db = knex) {
  return db()
}