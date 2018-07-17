import {
  LOGGED_IN,
  LOGGED_OUT
} from '../../actions/auth/login'


const toggleNav = (state = false, action) => {
  switch (action.type) {

    case LOGGED_IN:
      return true

    case LOGGED_OUT:
      return false

    default:
      return state
  }
}

export default toggleNav
