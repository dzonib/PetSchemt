import {GET_ANIMALS_FROM_SHELTER} from '../types'

const initialState = []

const getAnimalsFromShelterReducer = ( state = initialState, action) => {

  switch(action.type) {
    case GET_ANIMALS_FROM_SHELTER:
      return action.animals
    default:
      return state
  }
}

export default getAnimalsFromShelterReducer