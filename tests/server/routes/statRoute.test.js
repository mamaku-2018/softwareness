const request = require('supertest')
const server = require('../../../server')

jest.mock('../../../server/db/stats', () => ({
  categoryMaleFemaleCount: () => Promise.resolve({
    gender:
  [ {Male: 3, Female: 10, Category: 'creative'},
    {Male: 10, Female: 9, Category: 'support'},
    {Male: 7, Female: 11, Category: 'technical'} ]
  }),
  catetoryLocalForeignCount: () => Promise.resolve({
    local: [{name: 'Local', value: 69}, {name: 'Foreign', value: 31}]
  })
}))

test('good to go', () => {
  expect(true).toBeTruthy()
})

test('GET stats', () => {
  return request(server)
    .get('/api/v1/stats')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
})
