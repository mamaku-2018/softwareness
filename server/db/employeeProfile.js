var environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getEmpProfiles,
  getEmpLocal
}

function getEmpProfiles (companyId, db = knex) {
  return db('role_counts')
    .join('roles', 'role_counts.role_id', 'roles.id')
    .where('company_id', companyId)
    .select()
}

function getEmpLocal (companyId, db = knex) {
  return db('role_counts')
    .join('roles', 'role_counts.role_id', 'roles.id')
    .where('company_id', companyId)
    .select('percent_local as pl')
    .then(localResult => {
      const local = localResult
      const foreign = 100 - local[0].pl
      return ([
        {'name': 'Local', 'value': local[0].pl},
        {'name': 'Foreign', 'value': foreign}
      ])
    })
}
