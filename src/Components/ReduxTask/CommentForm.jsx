import React, { Component } from 'react';
import { addComment } from '../../redux/action'; 
import { connect } from 'react-redux';

class CommentForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comment : ""
    }
  }

    handleChange = (e)=> {
       this.setState({
         comment : e.target.value
       })
    }

    formSubmitHandler = (e) => {
      e.preventDefault();
      const newComment = {
        id: Math.random().toString()*10000 ,
        comment : this.state.comment,
        reply : [],
      }
      this.props.addComment(newComment);
    }
  render() {
    return <form onSubmit={this.formSubmitHandler}>
          <input type='text' placeholder='comment...' onChange={this.handleChange}/>
          <button type='submit'>Add</button>
      </form>
    
  }
}

export default connect(null, {addComment})(CommentForm);
