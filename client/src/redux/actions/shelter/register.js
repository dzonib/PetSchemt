import axios from 'axios'
import { getErrors } from '../getErrors';

export const registerUser = (shelterData, history) => async dispatch => {
  try {
    await axios.post('/api/shelter/register', shelterData)
    history.push('/shelter/login')
  } catch(e) {
    dispatch(getErrors(e.response.data))
  }
}