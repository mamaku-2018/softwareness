exports.seed = (knex, Promise) => {
  return knex('role_counts').del()
    .then(function () {
      return knex('role_counts').insert([
        {id: 1, role_id: 4, company_id: 6, count: 8, timestamp: '2018-03-12', avg_years_exp: 3, female_count: 7, male_count: 1, open_reqs: 1, percent_local: 87},
        {id: 2, role_id: 4, company_id: 4, count: 6, timestamp: '2018-03-12', avg_years_exp: 7, female_count: 3, male_count: 3, open_reqs: 0, percent_local: 50},
        {id: 3, role_id: 2, company_id: 3, count: 16, timestamp: '2018-03-12', avg_years_exp: 2, female_count: 7, male_count: 9, open_reqs: 4, percent_local: 75},
        {id: 4, role_id: 5, company_id: 2, count: 13, timestamp: '2018-03-12', avg_years_exp: 4, female_count: 10, male_count: 3, open_reqs: 2, percent_local: 38},
        {id: 5, role_id: 1, company_id: 5, count: 4, timestamp: '2018-03-12', avg_years_exp: 3, female_count: 1, male_count: 3, open_reqs: 1, percent_local: 100},
        {id: 6, role_id: 3, company_id: 6, count: 3, timestamp: '2018-03-12', avg_years_exp: 3, female_count: 2, male_count: 1, open_reqs: 0, percent_local: 66}
      ])
    })
}
