import {RECEIVE_COMPANY_INFO} from '../actions'

function companyInfo (state = [], action) {
  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      return action.companyProfile

    default:
      return state
  }
}

export default companyInfo
