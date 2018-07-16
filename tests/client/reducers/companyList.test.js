import companyList from '../../../client/reducers/companyList'
import {RECEIVE_COMPANIES} from '../../../client/actions/companies'

test('reducer receives list of all companies', () => {
  const currentState = []
  const action = {
    type: RECEIVE_COMPANIES,
    companies: [{name: 'test name'}]
  }
  const newState = companyList(currentState, action)
  expect(newState.length).toBe(1)
})
