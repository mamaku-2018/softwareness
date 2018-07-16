import request from '../../lib/apiClient'
import {saveAuthToken, logOff} from '../../lib/auth'
import {showError, clearError, showSuccess} from '../'
import {requestUserDetails,
  receiveUserDetails,
  getUserDetails} from './register'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const LOG_OUT = 'LOG_OUT'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_OUT = 'LOGGED_OUT'

export const requestLogin = () => {
  return {
    type: REQUEST_LOGIN
  }
}

export const receiveLogin = (token) => {
  return {
    type: RECEIVE_LOGIN,
    token
  }
}

export const logOut = () => {
  logOff()
  return {
    type: LOG_OUT
  }
}

export const untoggle = () => {
  return {
    type: LOGGED_OUT
  }
}

export const toggleNav = () => {
  return {
    type: LOGGED_IN
  }
}

export function login (user, confirmSuccess) {
  return (dispatch) => {
    dispatch(requestLogin())
    request('post', '/login', user)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receiveLogin(res.body))
        dispatch(getUserDetails(token.id))
        dispatch(clearError())
        dispatch(toggleNav())
        confirmSuccess()
        // stretch: add user's name to welcome message
        dispatch(showSuccess('You are now logged in.'))
      })
      .catch(err => {
        const res = err.response.body
        if (res && res.errorType === 'INVALID_CREDENTIALS') {
          return dispatch(showError('Username and password do not match an existing user'))
        }
      })
  }
}

export function getUser (id) {
  return (dispatch) => {
    dispatch(requestUserDetails())
    request('get', `/users/${id}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}
