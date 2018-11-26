import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactRouterCompleteGuide from './reactRouterCompleteGuide'
//import Gists from './reacttraining-router/gist'
//import Usage from './patterns/'
import Usage from './patterns/index3'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Usage/>
        {/*<ReactRouterCompleteGuide/>*/}
        {/*<Gists />*/}
      </div>
    );
  }
}

export default App;
