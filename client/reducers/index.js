import {combineReducers} from 'redux'

import waiting from './waiting'
import categoryMaleFemale from './stats/categoryMaleFemale'
import localForeign from './localForeign'
import companyInfo from './companyInfo'
import companyProfile from './companyProfile'
import errorMessage from './errorMessage'
import auth from './auth'

export default combineReducers({
  errorMessage,
  waiting,
  localForeign,
  categoryMaleFemale,
  companyInfo,
  companyProfile,
  auth
})
