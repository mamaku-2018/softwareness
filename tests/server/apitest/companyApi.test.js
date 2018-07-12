const request = require('supertest')
const server = require('../../../server/server')

jest.mock('../../../server/db/companies', () => ({
  addCompany: () => Promise.resolve()
}))

test('good to go', () => {
  expect(true).toBeTruthy()
})

test('POST /api/v1/companies/add ', () => {
  return request(server)
    .post('/api/v1/companies/add')
    .send({
      name: 'test',
      websiteUrl: 'www.test.com',
      countryId: 123
    })
    .expect(200)
    .then(res => {
      return request(server)
        .get('/api/v1/companies/')
        .then(res => {
          expect(res.body.length).toBe(4)
        })
    })
})
