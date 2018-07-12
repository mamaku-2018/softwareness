import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import companyProfile from './companyProfile'

export default combineReducers({
  errorMessage,
  waiting,
  companyProfile

})
