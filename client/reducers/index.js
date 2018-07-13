import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import categoryMaleFemale from './stats/categoryMaleFemale'

export default combineReducers({
  errorMessage,
  waiting,
  categoryMaleFemale
})
