import axios from 'axios'
import {GET_ANIMALS_FROM_SHELTER} from '../../types'

const setAnimals = () => async dispatch => {
  try {
    const animals = await axios.get('/api/shelter/getanimals')
    dispatch(fetchAnimals(animals.data.animals))
  } catch(e) {
    console.log(e.message)
  }
}

const fetchAnimals = (animals) => {
  return {
    type: GET_ANIMALS_FROM_SHELTER,
    animals
  }
}

export default setAnimals