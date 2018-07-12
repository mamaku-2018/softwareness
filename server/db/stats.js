const config = require('./knexfile').development
const knex = require('knex').config

module.exports = {
  categoryMaleFemaleCount
}

function categoryMaleFemaleCount (db = knex) {
  return db('role_counts as rc')
    .join('roles as r', 'r.id', 'rc.role_id')
    .sum('rc.male_count as male_total')
    .sum('rc.female_count as female_total')
    .groupBy('r.category')
    .select('r.category')
}
