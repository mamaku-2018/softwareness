import {combineReducers} from 'redux'

import waiting from './waiting'
import companyInfo from './companyInfo'
import companyProfile from './companyProfile'
import errorMessage from './errorMessage'

export default combineReducers({
  waiting,
  companyInfo,
  companyProfile,
  errorMessage
})
