const config = require('./knexfile').development
const knex = require('knex').config

module.exports = {
  categoryMaleFemaleCount
}

function categoryMaleFemaleCount (db = knex) {
  return db('role_counts as rc')
    .join('roles as r', 'r.id', 'rc.role_id')
}
