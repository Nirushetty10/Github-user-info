import React, { Component } from 'react'

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      value : 0
    }
  }
  handleIncrement = ()=>{
    if(this.state.value<10) {
      this.setState((val)=>({
        value : val.value + 1
      }))
    }
    if(this.state.value<20 && this.state.value>=10) {
      this.setState((val)=>({
        value : val.value + 2
      }))
    }
  }

  handleDecrement = ()=>{
    if(this.state.value >0) {
      this.setState((val)=>({
        value : val.value - 1
      }))
    }
}

  render() {
    return (
      <>
      <h1>Couter Application in master</h1>
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
      </>
    )
  }
}
