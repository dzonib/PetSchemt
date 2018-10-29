// import {ADD_ANIMAL} from '../../types'
import axios from 'axios'

const addAnimal = (animalData, history) => async dispatch => {

  try {
    await axios.post('/api/animal', animalData)

    history.push('/shelter/animals')
  } catch(e) {
    console.log(e.message)
  }

  // dispatch(() => ({
  //   type: ADD_ANIMAL,
  //   anima: animalData
  // }))
}

export default addAnimal