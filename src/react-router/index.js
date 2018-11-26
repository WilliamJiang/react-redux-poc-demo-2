import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'

const Dashboard = () => <h1>Dashboard</h1>
const PublicHomePage = () => <h1>Public Home Page</h1>

// https://reacttraining.com/react-router/web/api/Route/route-props
class Routings extends Component {
  state = {loggedIn: false}

  render() {
    const {loggedIn} = this.state;
    return (
      <Router>
        <div className="routing">
          <Switch>
            <Route exact path="/" render={() => (
              loggedIn ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <PublicHomePage/>
                )
            )}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/php" component={PublicHomePage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routings;