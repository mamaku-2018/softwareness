import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import profileHeader from './profileHeader'

export default combineReducers({
  errorMessage,
  waiting,
  profileHeader

})
