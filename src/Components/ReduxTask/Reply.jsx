import React, { Component } from 'react';
import { delComment } from '../../redux/action'; 
import ReplyForm from './ReplyForm'

import { connect } from 'react-redux';
import ChildrenReply from './ChildrenReply';

class Reply extends Component {

    deleteCommentHandler = (id) => {
        this.props.delComment(id);
    }
  render() {
    console.log(this.props.comments);
    return (
        <li key={this.props.id}>
        {this.props.comment}
        <button onClick={() =>this.deleteCommentHandler(this.props.id)}>Delete</button>
        <ReplyForm index={this.props.index}/>
        {/* <ul>
            {this.props.comments[this.props.index].reply.map(value => {
                return <ChildrenReply key={value.id} index={value.index} comment={value.comment} />
            })}
        </ul> */}
        
    </li>
    )
  }
}

const propData = (state)=> ({
    comments : state.comments
})

export default connect(propData, {delComment})(Reply);
