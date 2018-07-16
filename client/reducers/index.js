import {combineReducers} from 'redux'

import waiting from './waiting'
import categoryMaleFemale from './stats/categoryMaleFemale'
import localForeign from './localForeign'
import companyInfo from './companyInfo'
import companyList from './companyList'
import companyProfile from './companyProfile'
import errorMessage from './errorMessage'
export default combineReducers({
  errorMessage,
  waiting,
  localForeign,
  categoryMaleFemale,
  companyInfo,
  companyProfile,
  companyList
})
