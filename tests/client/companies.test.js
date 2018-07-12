import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {receiveCompanyId,
  addCompany,
  receiveCompany,
  getCompany,
  receiveCompanies,
  getCompanies} from '../../client.actions/companies'
import fetchMock from 'fetch-mock'
import expect from 'supertest'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('creates RECEIVE_COMPANIES when getCompanies is done', () => {
    fetchMock
      .getOnce('/', [{body: {company: ''}, headers: {'content-type': 'application/json'}}])
    const store = mockStore({companies: []})
    return store.dispatch(getCompanies())
      .then(() => {
        expect(store.getActions()).toEqual(receiveCompanies)
      })
  })
})
