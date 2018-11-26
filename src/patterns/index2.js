import React, {Component, Fragment} from 'react';
import {Switch} from './Switch'

class Toggle extends Component {
  state = {on: false}
  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on)
    )

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle
    })
  }
}

const Layer1 = ({on, toggle}) => <Layer2 on={on} toggle={toggle}/>
const Layer2 = ({on, toggle}) => (
  <Fragment>
    {on ? 'The button is on' : 'The button is off'}
    <Layer3 on={on} toggle={toggle}/>
  </Fragment>
)
const Layer3 = ({on, toggle}) => <Layer4 on={on} toggle={toggle}/>

const Layer4 = ({on, toggle}) => <Switch on={on} onClick={toggle}/>

function Usage({onToggle = (...args) => console.log('William on Toggle2...', ...args)}) {
  return (
    <Toggle onToggle={onToggle}>
      {({on, toggle}) => <Layer1 on={on} toggle={toggle}/>}
    </Toggle>
  )
}

export default Usage;