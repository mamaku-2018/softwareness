import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import localForeign from './localForeign'

export default combineReducers({
  errorMessage,
  waiting,
  localForeign
})
