import {
  requestUserRegistration,
  receiveUserRegestration
} from '../../../client/actions/auth/register'

test('requestUserRegistration returns correct action type', () => {
  const expected = 'REQUEST_USER_REGISTRATION'

  const actual = requestUserRegistration()

  expect(actual.type).toBe(expected)
})

test('requestUserRegistration returns correct action', () => {
  const expected = {type: 'REQUEST_USER_REGISTRATION'}

  const actual = requestUserRegistration()

  expect(actual).toEqual(expected)
})

test('receiveUserRegestration returns correct action type', () => {
  const expected = 'RECEIVE_USER_REGISTRATION'

  const actual = receiveUserRegestration()

  expect(actual.type).toBe(expected)
})

test('receiveUserRegestration returns correct action', () => {
  const expected = {type: 'RECEIVE_USER_REGISTRATION'}

  const actual = receiveUserRegestration()

  expect(actual).toEqual(expected)
})

test('receiveUserRegestration returns type details', () => {
  const token = 'token'
  const expected = {
    type: 'RECEIVE_USER_REGISTRATION',
    token: 'token'
  }

  const actual = receiveUserRegestration(token)

  expect(actual).toEqual(expected)
})
