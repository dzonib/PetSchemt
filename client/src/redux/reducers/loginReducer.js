import { SET_CURRENT_USER } from '../types'
import isEmpty from '../../validation/validation'

const initialState = {
  isAuthenticated: false,
  shelter: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER: 
      return {
        isAuthenticated: !isEmpty(action.payload),
        shelter: action.payload
      }
    default:
      return state
  }
}

export default authReducer