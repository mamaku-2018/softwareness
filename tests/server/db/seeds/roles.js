exports.seed = (knex, Promise) => {
  return knex('roles').del()
    .then(function () {
      return knex('roles').insert([
        {id: 1, name: 'developer', category: 'technical'},
        {id: 2, name: 'BA', category: 'support'},
        {id: 3, name: 'tester', category: 'support'},
        {id: 4, name: 'dev ops', category: 'technical'},
        {id: 5, name: 'UI/UX/IA', category: 'creative'},
        {id: 6, name: 'graphic designer', category: 'creative'}
      ])
    })
}
