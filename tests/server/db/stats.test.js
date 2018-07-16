const db = require('../../../server/db/stats')
const env = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('categoryMaleFemaleCount', () => {
  return db.categoryMaleFemaleCount(testDb)
    .then(counts => {
      expect(counts.length).toBe(3)
    })
})

test('catetoryLocalForeignCount', () => {
  return db.catetoryLocalForeignCount(testDb)
    .then(counts => {
      const actual = counts[0].value + counts[1].value
      expect(actual).toBe(100)
    })
})

test('categoryCompanyGenderCount', () => {
  return db.categoryCompanyGenderCount(testDb)
    .then(counts => {
      expect(counts.length).toBe(4)
    })
})
