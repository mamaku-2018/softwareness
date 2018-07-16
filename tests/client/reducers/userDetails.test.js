import {
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../../../client/actions/auth/register'
import {
  LOG_OUT
} from '../../../client/actions/auth/login'
import userDetails from '../../../client/reducers/auth/userDetails'

test('auth returns user details during RECEIVE_USER_DETAILS', () => {
  const currentState = {}
  const action = {
    type: RECEIVE_USER_DETAILS,
    user: {name: 'test name'}
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBe(action.user)
})

test('auth returns null during REQUEST_USER_DETAILS', () => {
  const currentState = {name: 'test name'}
  const action = {
    type: REQUEST_USER_DETAILS
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBeNull()
})

test('auth returns null during LOG_OUT', () => {
  const currentState = {name: 'test name'}
  const action = {
    type: LOG_OUT
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBeNull()
})

test('auth returns current state by default', () => {
  const currentState = {name: 'test name'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBe(currentState)
})
