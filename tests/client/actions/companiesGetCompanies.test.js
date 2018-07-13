import {
  getCompanies,
  RECEIVE_COMPANIES
} from '../../../client/actions/companies'
import {SHOW_ERROR} from '../../../client/actions'

jest.mock('superagent', () => {
  return {
    get: (url) => {
      if (url.split('/')[1] === 'api') {
        return Promise.resolve({body: [
          {company: {
            name: 'test', websiteUrl: 'www.test.com', countryId: '123'
          }}
        ]})
      } else {
        return Promise.reject(new Error('File not found'))
      }
    }
  }
})

test('get companies gets the correct actions', () => {
  const dispatch = jest.fn()
  return getCompanies('/api/v1/companies')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(RECEIVE_COMPANIES)
    })
})

test('get companies returns an error with incorrect url', () => {
  const dispatch = jest.fn()
  return getCompanies('/companies')(dispatch)
    .catch(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})
