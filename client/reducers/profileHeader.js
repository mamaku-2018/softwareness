import {RECEIVE_PROFILEHEADER} from '../actions'

const intitialState = []
const profileHeader = (state = intitialState, action) => {
  switch (action.type) {
    case RECEIVE_PROFILEHEADER:
      return action.profileHeader

    default:
      return state
  }
}

export default profileHeader
