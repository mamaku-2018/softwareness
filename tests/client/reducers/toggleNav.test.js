import {
  LOGGED_IN,
  LOGGED_OUT
} from '../../../client/actions/auth/login'

import 
  toggleNav
 from '../../../client/reducers/auth/toggleNav'

test('toggleNav returns true during LOGGED_IN', () => {
  const currentState = false
  const action = {
    type: LOGGED_IN
  }
  const newState = toggleNav(currentState, action)
  expect(newState).toBe(true)
})

test('toggleNav returns false during LOGGED_OUT', () => {
  const currentState = true
  const action = {
    type: LOGGED_OUT
  }
  const newState = toggleNav(currentState, action)
  expect(newState).toBe(false)
})