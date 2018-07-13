import {showError, clearError, showSuccess} from '../'
import {saveAuthToken} from '../lib/auth'
import request from '../lib/apiClient'

export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION'
export const RECEIVE_USER_REGISTRATION = 'RECEIVE_USER_REGISTRATION'
export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'

const requestUserRegistration = () => {
  return {
    type: REQUEST_USER_REGISTRATION
  }
}

const receiveUserRegestration = (token) => {
  return {
    type: RECEIVE_USER_REGISTRATION,
    token
  }
}

const requestUserDetails = () => {
  return {
    type: REQUEST_USER_DETAILS
  }
}

const receiveUserDetails = (user) => {
  return {
    type: RECEIVE_USER_DETAILS,
    user
  }
}

export function register (user) {
  
  return dispatch => {
    dispatch(requestUserRegistration())
    return request('post', '/auth/register', user)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receiveUserRegestration(res.body))
        dispatch(getUserDetails(token.id))
        history.push('/logIn')
        dispatch(showSuccess('Registration successful'))
      })
      .catch(err => {
        const res = err.response.body
        if (res && res.errorType === 'EMAIL_UNAVAILABLE') {
          return dispatch(showError('This email is unavialable'))
        }
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

export function getUserDetails (id) {
  return (dispatch) => {
    dispatch(requestUserDetails())
    request('get', `/users/${id}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occured'))
      })
  }
}
