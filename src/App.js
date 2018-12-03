import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import ReactRouterCompleteGuide from './react-router/reactRouterCompleteGuide'
//import Usage from './patterns/'
import Usage from './patterns/index'
import Gists from './react-router/gist'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Usage}/>
            <Route path="/demo" component={ReactRouterCompleteGuide}/>
            <Route path="/gists" component={Gists}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
