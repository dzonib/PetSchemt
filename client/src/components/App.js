import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Layout/Header';
import ShelterRegistration from './Shelter/ShelterRegistration';
import Login from './Shelter/Login';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
      <> 
        <Route path='/' component={Header}/>
        <Switch>
          <Route path='/shelter/register' component={ShelterRegistration}/>
          <Route path='/shelter/login' component={Login}/>
        </Switch>
      </>

    </Router>
    );
  }
}

export default App;
