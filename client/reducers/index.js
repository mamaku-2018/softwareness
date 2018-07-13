import {combineReducers} from 'redux'

import waiting from './waiting'
import categoryMaleFemale from './stats/categoryMaleFemale'
import localForeign from './localForeign'
import companyInfo from './companyInfo'
import errorMessage from './errorMessage'
export default combineReducers({
  errorMessage,
  waiting,
  localForeign,
  categoryMaleFemale,
  companyInfo
})
