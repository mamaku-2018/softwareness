import {RECEIVE_COMPANIES} from '../actions/companies'

const initialState = []
const companies = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies

    default:
      return state
  }
}

export default companies
