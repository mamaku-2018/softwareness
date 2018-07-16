exports.up = (knex, Promise) => {
  return knex.schema.createTable('role_counts', table => {
    table.increments('id').primary()
    table.integer('role_id').references('roles.id')
    table.integer('company_id').references('companies.id')
    table.integer('count')
    table.date('timestamp')
    table.integer('female_count')
    table.integer('male_count')
    table.integer('open_reqs')
    table.integer('percent_local')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('role_counts')
}
