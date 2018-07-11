exports.up = (knex, Promise) => {
  return knex.schema.createTable('companies', table => {
    table.increments('id')
    table.string('name')
    table.string('website_url')
    table.integer('country_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('companies')
}
