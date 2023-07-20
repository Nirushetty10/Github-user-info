import React, { Component } from 'react';
import "./TodoCard.scss"

export default class TodoCard extends Component {
  render() {
    const {id,date,task,setCheck,check,deleteTask} = this.props;
    let strike = (check) ? {textDecoration: 'line-through'} : null;
    return (
      <div className='card'>
        <div className='date' style={strike}>{date}</div>
        <div className='task' style={strike}>{task}</div>
        <input type='checkbox' checked={check} onChange={(e)=> setCheck(e.target.checked, id)}/>
        <button onClick={(e)=> deleteTask(id)}>delete</button>
      </div>
    )
  }
}

