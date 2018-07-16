import {
  getCompanyInfo,
  RECEIVE_COMPANY_INFO
} from '../../../client/actions/companies'
import {SHOW_ERROR} from '../../../client/actions'

jest.mock('superagent', () => {
  return {
    get: (url) => {
      const splitUrl = url.split('/')
      const id1 = Number(splitUrl[splitUrl.length - 1])
      // Number() returns NaN if passed a string or letters // TODO SEEK BETTER SOLUTION!!!
      const id2 = Number(splitUrl[splitUrl.length - 1])
      // Got linter error if we just compare id to id so this hacky method got the results we wanted even if its hacky
      if (id1 === id2) {
        return Promise.resolve({body: {
          company: {
            name: 'test', websiteUrl: 'www.test.com', countryId: '123'
          }}
        })
      } else {
        return Promise.reject(new Error('File not found'))
      }
    }
  }
})

test('get companies gets the correct actions', () => {
  const dispatch = jest.fn()
  return getCompanyInfo(2)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(RECEIVE_COMPANY_INFO)
    })
})

test('get companies returns an error with incorrect url', () => {
  const dispatch = jest.fn()
  return getCompanyInfo('not an id')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})
