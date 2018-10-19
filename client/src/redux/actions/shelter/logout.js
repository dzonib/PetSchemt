import { setCurrentShelter } from './login'

const logOut = (history) => dispatch => {
  dispatch(setCurrentShelter({}))
  history.push('/shelter/login')
}

export default logOut