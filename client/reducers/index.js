import {combineReducers} from 'redux'

import waiting from './waiting'
import categoryMaleFemale from './stats/categoryMaleFemale'
import localForeign from './localForeign'
import companyInfo from './companyInfo'
<<<<<<< HEAD
=======
import companyProfile from './companyProfile'
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
import errorMessage from './errorMessage'
export default combineReducers({
  errorMessage,
  waiting,
  localForeign,
  categoryMaleFemale,
<<<<<<< HEAD
  companyInfo
=======
  companyInfo,
  companyProfile
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
})
