import {SET_ANIMAL} from '../types'

const initialState = {}

const animalReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ANIMAL:
      return {animal: action.animal}
    default:
      return state
  }
}

export default animalReducer