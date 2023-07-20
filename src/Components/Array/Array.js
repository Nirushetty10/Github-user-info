import React, { Component } from 'react'
import Display from '../Display/Display'

class Array extends Component {
  render() {
    // let languages = [["HTML", "Tim Berners-Lee", 1993],["CSS", "Håkon Wium Lie" , 1994],["JavaScript","Brendan Eich", 1995],["React","Jordan Walke",2013],["Node", "Ryan Dahl", 2009]];
    let languages = [{lang:"HTML", auth:"Tim Berners-Lee", year:1993},{lang:"CSS", auth:"Håkon Wium Lie" , year:1994},{lang:"JavaScript",auth:"Brendan Eich", year:1995},{lang:"React",auth:"Jordan Walke",year:2013},{lang:"Node", auth:"Ryan Dahl", year:2009}];
    return (
     languages.map((content,index)=> <Display key={index} lang={content.lang} author={content.auth} year={content.year}/>
   )
    )
  }
}

export default Array
