import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

/**
 * payload: { email, password }
 */

const AddUser = payload => ({
  type: 'SAVE_LOGIN_INFO',
  payload
});

class Login extends Component {
  state = {
    email: "",
    password: "",
    fireRedirect: false
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({fireRedirect: true});
    this.props.AddUser({email: this.state.email});
  }

  render() {
    const {fireRedirect} = this.state;
    const {user} = this.props;
    if (fireRedirect) {
      return <Redirect to="/info"/>
    }
    return (
      <div className="Login">
        <h1>User Login {user && user.email ? `[ ${user.email} ]` : ''}</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              id="password"
            />
          </FormGroup>
          <Button
            bsStyle="primary"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            User Login
          </Button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({
    AddUser
  }, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);