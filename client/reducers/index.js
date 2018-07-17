import {combineReducers} from 'redux'

import waiting from './waiting'
import categoryMaleFemale from './stats/categoryMaleFemale'
import localForeign from './localForeign'
import companyInfo from './companyInfo'
import companyProfile from './companyProfile'
import errorMessage from './errorMessage'
import categoryCompanyGender from './stats/categoryCompanyGender'
import userDetails from './auth/userDetails'
import login from './auth/login'
import register from './auth/register'

export default combineReducers({
  errorMessage,
  waiting,
  localForeign,
  categoryMaleFemale,
  companyInfo,
  companyProfile,
  categoryCompanyGender,
  userDetails,
  login,
  register
})
