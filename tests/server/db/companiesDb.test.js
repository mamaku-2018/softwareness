const db = require('../../../server/db/companiesDb')
const env = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('getAllCompanies returns list of all companies', () => {
  db.getAllCompanies(testDb)
    .then(companies => {
      expect(companies.length).toBe(3)
    })
})

test('getCompany returns selected company by id', () => {
  const id = 1
  db.getCompany(id, testDb)
    .then(companies => {
      expect(companies.length).toBe(1)
    })
})

test('addCompany inserts a new company object', () => {
  const company = {
    name: 'test',
    website_url: 'test.com',
    country_id: 1111
  }
  db.addCompany(company, testDb)
    .then(resp => {
      expect(resp).toBe(1)
    })
})
