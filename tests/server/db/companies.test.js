const db = require('../../../server/db/companies')
const dbProfile = require('../../../server/db/employeeProfile')
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
  return db.getAllCompanies(testDb)
    .then(companies => {
      expect(companies.length).toBe(6)
    })
})

test('getCompany returns selected company by id', () => {
  const id = 1
  return db.getCompany(id, testDb)
    .then(companies => {
      expect(companies.id).toBe(1)
    })
})

test('addCompany inserts a new company object', () => {
  const company = {
    name: 'test',
    website_url: 'test.com',
    country_id: 1111
  }
  return db.addCompany(company, testDb)
    .then(resp => {
      expect(typeof (resp)).toBe('number')
    })
})

test('getEmpProfiles returns list of all profiles', () => {
  const id = 3
  return dbProfile.getEmpProfiles(id, testDb)
    .then(categories => {
      expect(categories.length).toBe(1)
    })
})
