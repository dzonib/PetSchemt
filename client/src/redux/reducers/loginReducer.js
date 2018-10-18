import { SET_CURRENT_USER } from '../types'

const initialState = {
  isAuthenticated: false,
  shelter: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER: 
      return {
        isAuthenticated: true,
        shelter: action.payload
      }
    default:
      return state
  }
}

export default authReducer