import {GET_ALL_ANIMALS} from '../../types'
import axios from 'axios'

const getAllAnimals = () => async dispatch => {
const animals = await axios.get('/api/animal')

dispatch(setAllAnimals(animals.data))
}

const setAllAnimals = (animals) => {
  return {
    type: GET_ALL_ANIMALS,
    animals
  }
}

export default getAllAnimals