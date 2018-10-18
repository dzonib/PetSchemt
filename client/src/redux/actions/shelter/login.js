import {SET_CURRENT_USER} from '../../types'
import setAuthToken from '../../../utils/setAuthToken'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {getErrors} from '../getErrors';

const login = (data) => async dispatch => {
  try {
    const res = await axios.post('/api/shelter/login', {
      ...data
    })

    const {token} = res.data
    // set token to ls
    localStorage.setItem('jwt', token)

    // set token to auth header
    setAuthToken(token)

    const decoded = jwt_decode(token)

    await dispatch(setCurrentShelter(decoded))

  } catch (e) {
    dispatch(getErrors(e.response.data))
  }
}

const setCurrentShelter = (payload) => {
  return {type: SET_CURRENT_USER, payload}
}

export {login as default}