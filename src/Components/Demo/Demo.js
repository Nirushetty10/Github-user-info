import React, { Component } from 'react'

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      value : 0,
      count : 0
    }
  }
  handleIncrement = ()=>{
      this.setState((val)=>({
        value : val.value + 1
      }))

  }

  handleDecrement = ()=>{
      this.setState((val)=>({
        value : val.value - 1
      }))
}
shouldComponentUpdate(props,state) {
  if(state.value > 10 || state.value < -10) {
    return false;
  }
  return true;
}

componentDidMount() {
  console.log("component mounted successfully");
}
componentDidUpdate() {
  console.log(`component updated ${this.state.value} time successfully`);
}

  render() {
    return (
      <div>
      <h1>Couter Application in master</h1>
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
      </div>
    )
  }
}
