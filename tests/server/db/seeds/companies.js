exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(() => {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, name: 'xero', website_url: 'https://www.xero.com/nz/', country_id: '2310 '},
        {id: 2, name: 'vend', website_url: 'https://www.vendhq.com/nz/', country_id: '2311'},
        {id: 3, name: 'orion_health', website_url: 'https://orionhealth.com/nz/', country_id: '2312'}
      ])
    })
}
