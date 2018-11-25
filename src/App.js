import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactRouterCompleteGuide from './reactRouterCompleteGuide'
import Gists from './reacttraining-router/gist'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<ReactRouterCompleteGuide/>*/}
        <Gists />
      </div>
    );
  }
}

export default App;
