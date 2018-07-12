import {RECEIVE_PROFILEHEADER} from '../actions'

function profileHeader (state = [], action) {
  switch (action.type) {
    case RECEIVE_PROFILEHEADER:
      return action.profileHeader

    default:
      return state
  }
}

export default profileHeader
