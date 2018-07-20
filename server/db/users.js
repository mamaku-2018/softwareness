var environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

const hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists,
  getUserByEmail,
  getUser
}

function createUser (firstName, surName, password, email, db = knex) {
  const passwordHash = hash.generate(password)
  return db('users')
    .insert({
      first_name: firstName,
      surname: surName,
      hash: passwordHash,
      email: email
    })
}

function userExists (email, db = knex) {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByEmail (email, db = knex) {
  return db('users')
    .select()
    .where('email', email)
    .first()
}

function getUser (id, db = knex) {
  return db('users')
    .select()
    .where('id', id)
}
