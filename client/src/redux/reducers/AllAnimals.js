import {GET_ALL_ANIMALS} from '../types'

const initialState = []


const allAnimalsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_ANIMALS:
      return action.animals
    default:
      return state
  }
}


export default allAnimalsReducer