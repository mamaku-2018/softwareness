import {GET_COMPANY_FOR_LOC_DATA} from '../actions/getCompanyForLocalStats'

function companyForLoc (state = [], action) {
  switch (action.type) {
    case GET_COMPANY_FOR_LOC_DATA:
      return action.local

    default:
      return state
  }
}

export default companyForLoc
