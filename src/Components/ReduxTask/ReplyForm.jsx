import React, { Component } from 'react';
import { addReply } from '../../redux/action'; 
import { connect } from 'react-redux';

class ReplyForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reply : ""
    }
  }

    handleChange = (e)=> {
       this.setState({
         reply : e.target.value
       })
    }

    formSubmitHandler = (e) => {
      e.preventDefault();
      const newReply = {
        index: this.props.index,
        id: Math.random().toString()*10000 ,
        reply : this.state.reply
      }
      this.props.addReply(newReply);
    }
  render() {
    return <form onSubmit={this.formSubmitHandler}>
          <input type='text' placeholder='reply...' onChange={this.handleChange}/>
          <button type='submit'>Add</button>
      </form>
    
  }
}

export default connect(null, {addReply})(ReplyForm);
