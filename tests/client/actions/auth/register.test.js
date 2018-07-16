import {
  requestUserRegistration,
  REQUEST_USER_REGISTRATION,
  receiveUserRegestration,
  RECEIVE_USER_REGISTRATION,
  requestUserDetails,
  REQUEST_USER_DETAILS,
  receiveUserDetails,
  RECEIVE_USER_DETAILS
} from '../../../../client/actions/auth/register'

test('requestUserRegistration returns correct action type', () => {
  const expected = REQUEST_USER_REGISTRATION

  const actual = requestUserRegistration()

  expect(actual.type).toBe(expected)
})

test('requestUserRegistration returns correct action', () => {
  const expected = {type: REQUEST_USER_REGISTRATION}

  const actual = requestUserRegistration()

  expect(actual).toEqual(expected)
})

test('receiveUserRegestration returns correct action type', () => {
  const expected = RECEIVE_USER_REGISTRATION

  const actual = receiveUserRegestration()

  expect(actual.type).toBe(expected)
})

test('receiveUserRegestration returns correct action', () => {
  const expected = {type: RECEIVE_USER_REGISTRATION}

  const actual = receiveUserRegestration()

  expect(actual).toEqual(expected)
})

test('receiveUserRegestration returns type details', () => {
  const token = 'token'
  const expected = {
    type: RECEIVE_USER_REGISTRATION,
    token: 'token'
  }

  const actual = receiveUserRegestration(token)

  expect(actual).toEqual(expected)
})

test('requestUserDetails returns correct action type', () => {
  const expected = REQUEST_USER_DETAILS

  const actual = requestUserDetails()

  expect(actual.type).toBe(expected)
})

test('requestUserDetails returns correct action', () => {
  const expected = {type: REQUEST_USER_DETAILS}

  const actual = requestUserDetails()

  expect(actual).toEqual(expected)
})

test('receiveUserDetails returns correct action type', () => {
  const expected = RECEIVE_USER_DETAILS

  const actual = receiveUserDetails()

  expect(actual.type).toBe(expected)
})

test('receiveUserDetails returns correct action', () => {
  const expected = {type: RECEIVE_USER_DETAILS}

  const actual = receiveUserDetails()

  expect(actual).toEqual(expected)
})

test('receiveUserDetails returns type details', () => {
  const user = 'user'
  const expected = {
    type: RECEIVE_USER_DETAILS,
    user: 'user'
  }

  const actual = receiveUserDetails(user)

  expect(actual).toEqual(expected)
})
