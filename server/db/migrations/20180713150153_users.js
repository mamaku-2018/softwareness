exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('surname')
    table.string('hash')
    table.string('email')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
