const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  createUser,
  userExists
}

function createUser (firstName, surName, hash, email, db = knex) {
  return db('users')
    .insert({first_name: firstName, surname: surName, hash: hash, email: email})
}

function userExists (email, db = knex) {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}
