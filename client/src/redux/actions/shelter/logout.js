import { setCurrentShelter } from './login'
import setAuthToken from '../../../utils/setAuthToken'

const logOut = (history) => dispatch => {
  localStorage.removeItem('jwt')

  setAuthToken(false)

  dispatch(setCurrentShelter({}))
  
  history.push('/shelter/login')
}

export default logOut