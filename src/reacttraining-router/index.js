import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt} from 'react-router-dom'

const User = (props) => {
  return (
    <h1>Welcome User {props.username}</h1>
  )
}
class ReactRouterCompleteGuide extends Component {
  state = {loggedIn: false}
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render() {
    return (
      <Router>
        <div className="react-router-complete-guide">
          <ul>
            <NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink>{" "}
            <NavLink to="/about" exact activeStyle={{color: 'green'}}>About</NavLink>{" "}
            <NavLink to="/user/john" exact activeStyle={{color: 'green'}}>User John</NavLink>{" "}
            <NavLink to="/user/peter" exact activeStyle={{color: 'green'}}>User Peter</NavLink>
          </ul>

          <Prompt when={!this.state.loggedIn} message={
            (location) => {
              return location.pathname.startsWith('/user') ? 'Are you sure?' : true
            }
          }/>

          <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle}/>

          <Route path="/" exact strict render={
            () => {
              return (
                <h1>Hello World, Welcome to HOME.</h1>
              )
            }
          }/>
          <Route path="/about" exact strict render={
            () => {
              return (
                <React.Fragment>
                  <h1>Welcome About.</h1>
                  <Link to="/">Home</Link>
                </React.Fragment>
              )
            }
          }/>
          <Route path="/user/:username" exact strict render={
            ({match}) => this.state.loggedIn ?
              <User username={match.params.username}/> : <Redirect to="/"/>
          }/>
        </div>
      </Router>
    )
  }
}
export default ReactRouterCompleteGuide;