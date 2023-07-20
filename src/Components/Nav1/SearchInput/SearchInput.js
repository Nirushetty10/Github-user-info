import React, { Component } from 'react';
import "./SearchInput.css"

export default class SearchInput extends Component {
  render() {
    return (
      <div className='searchBar'>
      <input type="text" placeholder='Search here....'/>
      <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    )
  }
}
