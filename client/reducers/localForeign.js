import {GET_LOCALDATA} from '../actions/stats/getCategoryForLocation'

const localforeign = (state = [], action) => {
  switch (action.type) {
    case GET_LOCALDATA:
      state = action.stats
      return state

    default:
      return state
  }
}

export default localforeign
