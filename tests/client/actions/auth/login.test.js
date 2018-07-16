import './saveAuthTokenMock'
import {
  REQUEST_LOGIN,
  requestLogin,
  RECEIVE_LOGIN,
  receiveLogin,
  LOG_OUT,
  logOut
} from '../../../../client/actions/auth/login'

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

test('logOut returns correct action type', () => {
  const expected = LOG_OUT

  const actual = logOut()

  expect(actual.type).toBe(expected)
})

test('logOut returns correct action', () => {
  const expected = {type: LOG_OUT}

  const actual = logOut()

  expect(actual).toEqual(expected)
})
