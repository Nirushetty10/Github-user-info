import React, { Component } from 'react'
import "./ContactManager.css";
import ContactCard from '../ContactCard/ContactCard';

export default class ContactManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : props.data,
      userName : "",
      mobile : "",
      id : 2
    }
  }
  updateUserName = (value)=>{
    this.setState((val)=> ({
      userName : value
    }))
  }

  updateMobile = (value)=>{
    this.setState((val)=> ({
      mobile : value
    }))
  }

  addUserHandler = ()=>{
    const {user,userName,mobile,id} = this.state;
    if(user === "" || mobile === "") {
      return;
    }
    this.setState({
      user : [...user, {id:id ,name:userName, mobile}],
      userName : "",
      mobile : "",
      id : id+1
    })
}

  deleteUser = (id)=>{
    const updatedUsers = this.state.user.filter(user => user.id !== id);
    this.setState({ user: updatedUsers });
  }

  render() {
    return (
      <div>
       
       <div className='contactForm'>
       <h1>Contact Manager</h1>
         <input className='input-text' value={this.state.userName} onChange={(e)=> this.updateUserName(e.target.value)}/>
         <input className='input-text' value={this.state.mobile} onChange={(e)=>this.updateMobile(e.target.value)}/>
         <button onClick={this.addUserHandler}>Add Contact</button>
         <hr/>
       </div>
       <div className='contact-book'>
           {this.state.user.map((data)=>{
              return <ContactCard key={data.id} data={data} deleteUser={this.deleteUser}/>
           })}
       </div>
      </div>
    )
  }
}
