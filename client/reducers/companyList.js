import {RECEIVE_COMPANIES} from '../actions/companies'

const companyList = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies

    default:
      return state
  }
}

export default companyList
