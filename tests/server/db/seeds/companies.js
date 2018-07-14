exports.seed = (knex, Promise) => {
  return knex('companies').del()
    .then(() => {
      return knex('companies').insert([
        {id: 1, name: 'xero', website_url: 'https://www.xero.com/nz/', country_id: 2310},
        {id: 2, name: 'vend', website_url: 'https://www.vendhq.com/nz/', country_id: 2311},
        {id: 3, name: 'orion health', website_url: 'https://orionhealth.com/nz/', country_id: 2312},
        {id: 4, name: 'trade me', website_url: 'https://www.trademe.co.nz', country_id: 2313},
        {id: 5, name: 'little giant', website_url: 'https://www.littlegiant.co.nz', country_id: 2314},
        {id: 6, name: 'supply', website_url: 'https://supply.co.nz', country_id: 2315}
      ])
    })
}
