import React, { Component } from 'react';
import {CssBaseline , AppBar, Toolbar, Typography} from "@material-ui/core"
import NavBar from '../NavBar';

export default class MainPage extends Component {
  render() {
    return (
       <div className="layout">
           <div className="top-sec">
             <NavBar />
           </div>
           {/* <div className="bottom-sec"></div> */}
       </div>
    )
  }
}
