import {combineReducers} from 'redux'

import waiting from './waiting'
import companyInfo from './companyInfo'
import errorMessage from './errorMessage'

export default combineReducers({
  waiting,
  companyInfo,
  errorMessage
})
