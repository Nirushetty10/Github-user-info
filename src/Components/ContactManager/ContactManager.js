import React, { Component } from 'react'
import "./ContactManager.css";
import ContactCard from '../ContactCard/ContactCard';
import { connect } from 'react-redux';
import { addContact ,deleteContact } from '../../redux/action';
import { mobileCount, selectContact, userNameCount } from '../../redux/selector';

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
    let {userName,mobile,id} = this.state;
    if(userName === "") {
      return;
    }
    let newUser = {
      userName, 
      mobile, 
      id: id+1
    }
   
    this.props.addContact(newUser);
    this.setState({
      userName : "",
      mobile : "",
      id : id+1
    })
}

  deleteUser = (id)=>{
    this.props.deleteContact(id);
  }

  render() {
    console.log(this.props);
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
       <h5>Total user count -{this.props.userNameCount}</h5>
       <h5>Total mobile count - {this.props.mobileCount}</h5>
      </div>
    )
  }
}

const propData = (state)=> ({
   user : selectContact(state),
   userNameCount : userNameCount(state),
   mobileCount : mobileCount(state)
})

export default connect(propData,{addContact , deleteContact})(ContactManager);
