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
