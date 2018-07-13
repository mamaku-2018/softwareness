const jwt = require('jsonwebtoken')

const db = require('../db/users')

module.exports = {
  issue
}

function issue (req, res) {
  db.getUserById(req.body.email)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    firstName: user.first_name,
    surName: user.surname
  }, secret, {
    expiresIn: '1d'
  })
}
