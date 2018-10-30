import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Dashboard from './Shelter/Dashboard'
import jwt_decode from 'jwt-decode'

import Header from './Layout/Header'
import store from '../redux/store'
import ShelterRegistration from './Shelter/ShelterRegistration'
import Login from './Shelter/Login'
import './App.css'
import setAuthToken from '../utils/setAuthToken'
import {setCurrentShelter} from '../redux/actions/shelter/login'
import Animals from './Shelter/Animals';
import AddAnimal from './Animals/AddAnimal';
import Animal from './Animals/Animal';


if (localStorage.jwt) {

  setAuthToken(localStorage.jwt)

  const decoded = jwt_decode(localStorage.jwt)

  store.dispatch(setCurrentShelter(decoded))
  
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <>
        <Route path='/' component={Header}/>
        <Switch>
          <Route path='/shelter/register' component={ShelterRegistration}/>
          <Route path='/shelter/login' component={Login}/>
          <Route path='/shelter/dashboard' component={Dashboard} />
          <Route path='/shelter/animals' component={Animals} />
          <Route path='/animals/add' component={AddAnimal} />
          <Route path={'/animals/:id'} component={Animal} />
        </Switch>
      </>
    </Router>
    </Provider>
    )
  }
}

export default App
