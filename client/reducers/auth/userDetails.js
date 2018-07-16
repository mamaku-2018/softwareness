import {
  LOG_OUT
} from '../../actions/auth/login'

import {
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../../actions/auth/register'

const userDetails = (state = null, action) => {
  switch (action.type) {
    case REQUEST_USER_DETAILS: // unsure if correct
    return null

    case RECEIVE_USER_DETAILS: // unsure if correct
      return action.user
  
    case LOG_OUT:
      return null
  
    default:
    return state
  }
}

export default userDetails