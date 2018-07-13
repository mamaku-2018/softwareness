const config = require('./knexfile').development
const knex = require('knex')(config)
const hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists,
  getUserById

}

function createUser (firstName, surName, password, email, db = knex) {
  const passwordHash = hash.generate(password)
  return db('users')
    .insert({first_name: firstName, surname: surName, hash: passwordHash, email: email})
}

function userExists (email, db = knex) {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserById (id, db = knex) {
  return db('users')
    .select()
    .where('email', id)
    .first()
}
