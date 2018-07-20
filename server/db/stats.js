var environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  categoryMaleFemaleCount,
  catetoryLocalForeignCount,
  categoryCompanyGenderCount
}

function categoryMaleFemaleCount (db = knex) {
  return db('role_counts as rc')
    .join('roles as r', 'r.id', 'rc.role_id')
    .sum('rc.male_count as Male')
    .sum('rc.female_count as Female')
    .groupBy('r.category')
    .select('r.category as Category')
}

function catetoryLocalForeignCount (db = knex) {
  return db('role_counts as rc')
    .avg('percent_local as local')
    .then(localResult => {
      const local = Math.floor(localResult[0].local)
      const foreign = 100 - local
      return ([
        {'name': 'Local', 'value': local},
        {'name': 'Foreign', 'value': foreign}
      ])
    })
}

function categoryCompanyGenderCount (id, db = knex) {
  return db('role_counts as rc')
    .sum('rc.male_count as Male')
    .sum('rc.female_count as Female')
    .groupBy('rc.company_id')
    .where('rc.company_id', id)
    .select('rc.company_id as CompanyId')
}
