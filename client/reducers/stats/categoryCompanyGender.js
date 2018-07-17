import {GET_COMPANY_GENDER} from '../../actions/stats/getCategoryCompanyGender'

const initialState = []

function categoryCompanyGender (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_GENDER:
      state = action.stats
      return state

    default:
      return state
  }
}

export default categoryCompanyGender
