import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShelterRegistration from './Shelter/ShelterRegistration';
import Header from './Layout/Header';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
      <> 
        <Route path='/' component={Header}/>
        <Switch>
          <Route path='/register' component={ShelterRegistration}/>
        </Switch>
      </>

    </Router>
    );
  }
}

export default App;
