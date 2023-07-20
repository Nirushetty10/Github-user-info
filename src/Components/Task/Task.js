import React, { Component } from 'react'
import Display from '../Display/Display';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
       city : ""
    }
  }
  setCity = (city)=>{
    this.setState({
      city: city
    })
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.setCity("Bangalore")}>Bangalore</button>
        <button onClick={()=>this.setCity("Goa")}>Goa</button>
        <button onClick={()=>this.setCity("Chennai")}>Chennai</button>
        <button onClick={()=>this.setCity("Mumbai")}>Mumbai</button>

        <Display city={this.state.city}/>
      </div>
    )
  }
}
