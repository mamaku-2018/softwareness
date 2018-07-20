import {RECEIVE_COMPANY_GENDER_STATS} from '../../actions/stats/companyGender'

const initialState = []

function companyGender (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COMPANY_GENDER_STATS:
      state = action.stats
      return state

    default:
      return state
  }
}

export default companyGender
