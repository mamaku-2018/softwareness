import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOG_OUT,
  LOGGED_IN,
  LOGGED_OUT
} from '../actions/auth/login'
import {
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../actions/auth/register'

const auth = (state = null, action) => {
  switch (action.type) {
    case REQUEST_USER_REGISTRATION:
      return true

    case RECEIVE_USER_REGISTRATION:
      return false

    case REQUEST_LOGIN:
      return true

    case RECEIVE_LOGIN:
      return false

    case REQUEST_USER_DETAILS: // unsure if correct
      return null

    case RECEIVE_USER_DETAILS: // unsure if correct
      return action.user

    case LOG_OUT:
      return null

    case LOGGED_IN:
      return true

    case LOGGED_OUT:
      return false

    default:
      return state
  }
}

export default auth
