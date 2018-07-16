import request from '../lib/apiClient'
import {saveAuthToken} from '../lib/auth'
import {showError, clearError, showSuccess} from '../'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const LOG_OUT = 'LOG_OUT'

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
  logOutUser()
  return {
    type: LOG_OUT
  }
}

export function login (user)