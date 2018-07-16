var environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getEmpProfiles
}

function getEmpProfiles (companyId, db = knex) {
  return db('role_counts')
    .join('roles', 'role_counts.role_id', 'roles.id')
    .where('company_id', companyId)
    .select()
}
