import React, { Component } from 'react';
import "./Footer.css"
import SearchBox from '../SearchBox/SearchBox';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <span>CopyRights</span>
        <SearchBox />
      </div>
    )
  }
}
