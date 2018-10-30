import axios from 'axios'
import {SET_ANIMAL} from '../../types'

const getAnimalById = (id, history) => async dispatch => {

  try {
    const animal = await axios.get(`/api/animal/${id}`)

    dispatch(setAnimalById(animal.data))
  
    history.push(`/animals/${id}`)

  } catch (e) {

    console.log(e)

  }
}

const setAnimalById = (animal) => {
  return {
    type: SET_ANIMAL,
    animal
  }
}

export default getAnimalById