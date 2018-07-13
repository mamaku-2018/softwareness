const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  getEmpProfiles
}

function getEmpProfiles (companyId) {
  return db('role_counts as empProfile')
    .join('roles as role', 'empProfile.role_id', 'role.id')
    .where('company_id', companyId)
    .select()
}
