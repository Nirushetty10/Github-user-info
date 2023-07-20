// import React, { Component } from 'react'
// import "./SearchBox.css"

// export default class SearchBox extends Component {
//   render() {
//     return (
//       <input type="text" placeholder='Search here....'/>
//     )
//   }
// }

import React, { useState } from 'react'

function SearchBox() {
  const [count, setCount] = useState({val : 0})
  return (
    <div>{count}</div>
  )
}

export default SearchBox
