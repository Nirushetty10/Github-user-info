import React, { Component } from 'react'
import "./ContactManager.css";
import ContactCard from '../ContactCard/ContactCard';
import { connect } from 'react-redux';
import { addContact ,deleteContact } from '../../redux/action';

 class ContactManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : "",
      mobile : "",
      id : 0
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
    let {user,userName,mobile,id} = this.state;
    if(user === "" || mobile === "") {
      return;
    }
    let newUser = {
      userName ,
      mobile,
      id : id+1
    }
    this.setState({
      id : id+1
    })
    this.props.addContact(newUser)
}

  deleteUser = (id)=>{
    this.props.deleteContact(id);
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
           {this.props.user.map((data)=>{
              return <ContactCard key={data.id} data={data} deleteUser={this.deleteUser}/>
           })}
       </div>
      </div>
    )
  }
}

const propData = (state)=> ({
   user : state.user
})

export default connect(propData,{addContact , deleteContact})(ContactManager);
