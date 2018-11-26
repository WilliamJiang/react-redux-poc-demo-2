import React, {Component, Fragment} from 'react';
import {Switch} from './Switch'

const ToggleContext = React.createContext({
  on: false,
  toggle: () => {
  }
})

class Toggle extends Component {
  static Consumer = ToggleContext.Consumer;
  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on)
    )
  state = {on: false, toggle: this.toggle}

  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    )
  }
}

const Layer1 = () => <Layer2/>
const Layer2 = () => (
  <ToggleContext.Consumer>
    {({on}) => (
      <Fragment>
        {on ? 'The button is on' : 'The button is off'}
        <Layer3 />
      </Fragment>
    )}
  </ToggleContext.Consumer>
)
const Layer3 = () => <Layer4 />

const Layer4 = () => (
  <Toggle.Consumer>
    {({on, toggle}) => <Switch on={on} onClick={toggle}/> }
  </Toggle.Consumer>
)

function Usage({onToggle = (...args) => console.log('William on Toggle3...', ...args)}) {
  return (
    <Toggle onToggle={onToggle}>
      <Layer1/>
    </Toggle>
  )
}

////////////

export default Usage;