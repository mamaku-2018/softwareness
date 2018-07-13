const request = require('supertest')
const server = require('../../../server/server')

jest.mock('../../../server/db/companies', () => ({
  getCompany: (id) => Promise.resolve({
    id: id,
    name: 'test',
    websiteUrl: 'www.test.com',
    countryId: 123
  }),
  getAllCompanies: () => Promise.resolve([
    {id: 2, name: 'test', websiteUrl: 'www.test.com', countryId: 321},
    {id: 3, name: 'onemore', websiteUrl: 'www.test1.com', countryId: 222},
    {id: 1, name: 'andanother', websiteUrl: 'www.test1.com', countryId: 432}
  ]),
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
})

test('GET /api/v1/companies', () => {
  return request(server)
    .get('/api/v1/companies')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
})

test('GET /api/v1/companies/id', () => {
  const id = 2
  return request(server)
    .get(`/api/v1/companies/${id}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.id).toBe(2)
    })
})
