import React, {Component, Fragment} from 'react';
import {Switch} from './Switch'

class Toggle extends Component {
  state = {on: false}
  toggle = () => this.setState(
    ({on}) => ({on: !on}),
    () => this.props.onToggle(this.state.on)
  )

  //0.basic render
  render0() {
    return this.renderSwitch4()
  }

  renderSwitch4() {
    return (
      <Switch on={this.state.on} onClick={this.toggle}/>
    )
  }

  //1.
  render1() {
    const {on} = this.state
    const {onContent, offContent, contentPosition = 'top'} = this.props
    return (
      <Fragment>
        {contentPosition === 'top' ? (on ? onContent : offContent) : null}
        <Switch on={on} onClick={this.toggle}/>
        {contentPosition === 'bottom' ? (on ? onContent : offContent) : null}
      </Fragment>
    )
  }

  //2.
  renderSwitch2() {
    const {on} = this.state
    return <Switch on={on} onClick={this.toggle}/>
  }

  render2() {
    return this.renderSwitch2();
  }

  //3.
  renderSwitch3({on, toggle}) {
    return <Switch on={on} onClick={toggle}/>
  }

  render3() {
    const prop = {on: this.state.on, toggle: this.toggle}
    return this.renderSwitch3(prop)
  }

  //4.
  render4() {
    return renderSwitch4({on: this.state.on, toggle: this.toggle})
  }

  //5.
  render5() {
    return this.props.renderSwitch5({on: this.state.on, toggle: this.toggle})
  }

  //6.
  render() {
    return this.props.children({on: this.state.on, toggle: this.toggle})
  }
}

//4.
const renderSwitch4 = ({on, toggle}) => {
  return <Switch on={on} onClick={toggle}/>
}

// const onToggle = (...args) => console.log('onTaggle', ...args)
// `contentPosition` is optional.
function Usage1({onToggle = (...args) => console.log('William on Toggle... ', ...args)}) {
  return (
    <Toggle
      onToggle={onToggle}
      onContent="-- The button is [on] --"
      offContent="-- The button is [off] --"
      contentPosition="bottom"
    />
  )
}

//5.
function Usage5_1({onToggle = (...args) => console.log('William on Toggle... ', ...args)}) {
  return (
    <Toggle onToggle={onToggle} renderSwitch5={renderSwitch4}/>
  )
}

const Usage5_2 = ({onToggle = (...args) => console.log('William on Toggle... ', ...args)}) => {
  return (
    <Toggle
      onToggle={onToggle}
      renderSwitch5={({on, toggle}) => {
        return <Switch on={on} onClick={toggle}/>
      }}
    />
  )
}

//6.
const Usage6_1 = ({onToggle = (...args) => console.log('William on Toggle... ', ...args)}) => {
  return (
    <Toggle
      onToggle={onToggle}
      children={({on, toggle}) => <Switch on={on} onClick={toggle}/> }
    />
  )
}

const handleClick = (id, e) => {
  console.log('handleClick', e)
}
function handleClick1(id) {
  return function (e) {
    console.log('handleClick1', e, id)
  }
}

const Usage = ({onToggle = (...args) => console.log('William on Toggle... ', ...args)}) => {
  const id = 'HSBC';
  return (
    <Fragment>
      <Toggle onToggle={onToggle}>
        {({on, toggle}) => <Switch on={on} onClick={toggle}/>}
      </Toggle>
      <button type="button" onClick={(e) => handleClick(id, e)}/>
      Button
    </Fragment>

  )
}

const OldUsage = Usage1;

//export default Usage;
export {Toggle, Usage as default};