<<<<<<< HEAD
import {RECEIVE_COMPANY_INFO} from '../actions'

function companyInfo (state = [], action) {
  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      return action.companyProfile
=======
import {RECEIVE_COMPANY_INFO} from '../actions/companies'

function companyInfo (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      return action.companyInfo
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed

    default:
      return state
  }
}

export default companyInfo
