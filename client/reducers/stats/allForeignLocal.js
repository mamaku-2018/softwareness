import {RECEIVE_ALL_FOREIGN_LOCAL_STATS} from '../../actions/stats/allForeignLocal'

const localforeign = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_FOREIGN_LOCAL_STATS:
      state = action.stats
      return state

    default:
      return state
  }
}

export default localforeign
