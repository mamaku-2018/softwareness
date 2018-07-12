import {RECEIVE_COMPANYPROFILE} from '../actions'

function companyProfile (state = [], action) {
  switch (action.type) {
    case RECEIVE_COMPANYPROFILE:
      return action.companyProfile

    default:
      return state
  }
}

export default companyProfile
