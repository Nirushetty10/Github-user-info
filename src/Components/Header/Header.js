import React, { Component } from 'react';
import "./Header.css"
import SearchBox from '../SearchBox/SearchBox';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <span>React</span>
        <SearchBox />
      </div>
    )
  }
}

