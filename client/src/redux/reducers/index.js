import {combineReducers} from 'redux'
import errorsReducer from './errorReducer'
import loginReducer from './loginReducer'
import getAnimalsByShelter from '../reducers/getAnimalsByShelter'
import animalReducer from '../reducers/animalReducer'


export default combineReducers({
  errors: errorsReducer,
  auth: loginReducer,
  animalsByShelter: getAnimalsByShelter,
  animal: animalReducer
})