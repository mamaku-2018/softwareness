import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  waiting
})
