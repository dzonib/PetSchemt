import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShelterRegistration from './Shelter/ShelterRegistration';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/register' component={ShelterRegistration}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
