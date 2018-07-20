import {RECEIVE_ALL_GENDER_STATS} from '../../actions/stats/allGender'

const initialState = []

function allGender (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_GENDER_STATS:
      state = action.stats
      return state

    default:
      return state
  }
}

export default allGender
