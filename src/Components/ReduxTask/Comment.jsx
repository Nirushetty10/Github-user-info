import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import Reply from './Reply'
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <div className='layout'>
        <CommentForm />
        <ul>
            {this.props.comments.map((value,index) => {
                return <Reply key={value.id} index={index} id={value.id} comment={value.comment}/>
            })}
        </ul>
      </div>
    )
  }
}

const propData = (state)=> ({
    comments : state.comments
})

export default connect(propData, null)(Comment);