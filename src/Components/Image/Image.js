import React, { Component } from 'react';
import "./Image.scss"

class Image extends Component {
  render() {
    return (
      <img src={this.props.link} alt=''/>
    )
  }
}

export default Image