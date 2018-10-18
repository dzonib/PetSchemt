import {combineReducers} from 'redux'
import errorsReducer from './errorReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  errors: errorsReducer,
  auth: loginReducer
})