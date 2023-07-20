// import React, { Component } from 'react'

// export default class Display extends Component {
//   render() {
//     console.log(this.props.city);
//     return (
//       <div>{this.props.city}</div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <h2>{this.props.lang} was developed in the year {this.props.year} by {this.props.author}</h2>
    )
  }
}

