const config = require('./knexfile').development
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
