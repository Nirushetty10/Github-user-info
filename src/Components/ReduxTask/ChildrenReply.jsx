import React, { Component } from 'react';
import { delReply } from '../../redux/action'; 
import { connect } from 'react-redux';
import "./ChildrenReply.scss"


class ChildrenReply extends Component {

    deleteCommentHandler = (index,id) => {
        let data = {
          index,
          id
        }
        this.props.delReply(data);
    }
  render() {
    return (
        <li className='last-child'>
        <div>{this.props.comment}</div>
        <button onClick={() =>this.deleteCommentHandler(this.props.index,this.props.id)}>Delete</button>
        
    </li>
    )
  }
}

export default connect(null, {delReply})(ChildrenReply);
