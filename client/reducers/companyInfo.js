import {RECEIVE_COMPANY_INFO} from '../actions/companies'

function companyInfo (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      return action.companyInfo

    default:
      return state
  }
}

export default companyInfo
