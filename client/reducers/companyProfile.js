import {RECEIVE_COMPANY_PROFILE} from '../actions/companies'

function companyProfile (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMPANY_PROFILE:
      return action.companyProfile

    default:
      return state
  }
}

export default companyProfile
