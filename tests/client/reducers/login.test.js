import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN
} from '../../../client/actions/auth/login'

import login from '../../../client/reducers/auth/login'

test('login returns true during REQUEST_LOGIN', () => {
  const currentState = true
  const action = {
    type: REQUEST_LOGIN
  }
  const newState = login(currentState, action)
  expect(newState).toBe(false)
})

test('login returns false during RECEIVE_LOGIN', () => {
  const currentState = false
  const action = {
    type: RECEIVE_LOGIN
  }
  const newState = login(currentState, action)
  expect(newState).toBe(true)
})
