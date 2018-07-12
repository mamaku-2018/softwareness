const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  categoryMaleFemaleCount,
  catetoryLocalForeignCount
}

function categoryMaleFemaleCount (db = knex) {
  return db('role_counts as rc')
    .join('roles as r', 'r.id', 'rc.role_id')
    .sum('rc.male_count as maleTotal')
    .sum('rc.female_count as femaleTotal')
    .groupBy('r.category')
    .select('r.category')
}

function catetoryLocalForeignCount (db = knex) {
  return db('role_counts as rc')
    .avg('percent_local as local')
    .then(localResult => {
      const local = Math.floor(localResult[0].local)
      const foreign = 100 - local
      return ([{local, foreign}])
    })
}
