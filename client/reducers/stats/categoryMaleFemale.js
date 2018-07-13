import {GET_CATEGORY_MALEFEMALE} from '../../actions/stats/getCategoryMaleFemale'

const initialState = []

function categoryMaleFemale (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_MALEFEMALE:
      state = action.stats
      return state

    default:
      return state
  }
}

export default categoryMaleFemale
