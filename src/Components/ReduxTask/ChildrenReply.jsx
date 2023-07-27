import React, { Component } from 'react';
import { delReply } from '../../redux/action'; 
import { connect } from 'react-redux';


class ChildrenReply extends Component {

    deleteCommentHandler = (id) => {
        this.props.delReply(id);
    }
  render() {
    return (
        <li >
        {this.props.comment}
        <button onClick={() =>this.deleteCommentHandler(this.props.id)}>Delete</button>
        
    </li>
    )
  }
}

export default connect(null, {delReply})(ChildrenReply);
