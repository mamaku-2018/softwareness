import {combineReducers} from 'redux'

import waiting from './waiting'
import companyInfo from './companyInfo'
import companyList from './companyList'
import companyProfile from './companyProfile'
import errorMessage from './errorMessage'
import allGenderStats from './stats/allGender'
import allForeignLocalStats from './stats/allForeignLocal'
import companyForeignLocalStats from './stats/companyForeignLocal'
import companyGenderStats from './stats/companyGender'
import userDetails from './auth/userDetails'
import register from './auth/register'
import login from './auth/login'

export default combineReducers({
  waiting,
  companyInfo,
  companyList,
  companyProfile,
  errorMessage,
  allGenderStats,
  allForeignLocalStats,
  companyForeignLocalStats,
  companyGenderStats,
  userDetails,
  register,
  login
})
