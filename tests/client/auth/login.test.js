import './saveAuthToken'
import {
  REQUEST_LOGIN,
  requestLogin,
  RECEIVE_LOGIN,
  receiveLogin,
  REQUEST_USER,
  requestUser,
  RECEIVE_USER,
  receiveUser,
  LOG_OUT,
  logOut
} from '../../../client/actions/auth/login'

test('requestLogin returns correct action type', () => {
  const expected = REQUEST_LOGIN

  const actual = requestLogin()

  expect(actual.type).toBe(expected)
})

test('requestLogin returns correct action', () => {
  const expected = {type: REQUEST_LOGIN}

  const actual = requestLogin()

  expect(actual).toEqual(expected)
})

test('receiveLogin returns correct action type', () => {
  const expected = RECEIVE_LOGIN

  const actual = receiveLogin()

  expect(actual.type).toBe(expected)
})

test('receiveLogin returns correct action', () => {
  const expected = {type: RECEIVE_LOGIN}

  const actual = receiveLogin()

  expect(actual).toEqual(expected)
})

test('receiveLogin returns type details', () => {
  const token = 'aksjdfhlksdfjhalskfgjbhserKURghlakus'
  const expected = {
    type: RECEIVE_LOGIN,
    token: token
  }
  const actual = receiveLogin(token)
  expect(actual).toEqual(expected)
})

test('requestUser returns correct action type', () => {
  const expected = REQUEST_USER

  const actual = requestUser()

  expect(actual.type).toBe(expected)
})

test('requestUser returns correct action', () => {
  const expected = {type: REQUEST_USER}

  const actual = requestUser()

  expect(actual).toEqual(expected)
})

test('receiveUser returns correct action type', () => {
  const expected = RECEIVE_USER

  const actual = receiveUser()

  expect(actual.type).toBe(expected)
})

test('receiveUser returns correct action', () => {
  const expected = {type: RECEIVE_USER}

  const actual = receiveUser()

  expect(actual).toEqual(expected)
})

test('receiveUser returns type details', () => {
  const user = {firstName: 'firse', lastName: 'last'}
  const expected = {
    type: RECEIVE_USER,
    user: user
  }
  const actual = receiveUser(user)
  expect(actual).toEqual(expected)
})

test('logOut returns correct action type', () => {
  // const logOff = jest.fn
  const expected = LOG_OUT

  const actual = logOut()

  expect(actual.type).toBe(expected)
})

test('logOut returns correct action', () => {
  const expected = {type: LOG_OUT}

  const actual = logOut()

  expect(actual).toEqual(expected)
})
