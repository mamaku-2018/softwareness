import {
  addCompany,
  REQUEST_COMPANY_INFO
} from '../../../client/actions/companies'
import {SHOW_ERROR} from '../../../client/actions'

jest.mock('superagent', () => {
  return {
    post: (url) => {
      if (url.split('/')[1] === 'api') {
        return {send: (company) => {
          return Promise.resolve({body: {id: 1}})
        }}
      } else {
        return Promise.reject(new Error('File not found'))
      }
    }
  }
})

test('add company gets the correct actions', () => {
  const dispatch = jest.fn()
  const company = {
    name: 'test',
    websiteUrl: 'www.test.com',
    countryId: '123'
  }
  return addCompany('/api/v1/companies', company)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_COMPANY_INFO)
    })
})

test('add company returns an error with incorrect url', () => {
  const dispatch = jest.fn()
  return addCompany('/companies')(dispatch)
    .catch(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})
