import React, { Component } from "react";
import { delComment } from "../../redux/action";
import ReplyForm from "./ReplyForm";
import "./Reply.scss";

import { connect } from "react-redux";
import ChildrenReply from "./ChildrenReply";

class Reply extends Component {
  deleteCommentHandler = (id) => {
    this.props.delComment(id);
  };
  render() {
    return (
      <li className="item">
        <div className="comment">
          <div>{this.props.comment}</div>
          <button onClick={() => this.deleteCommentHandler(this.props.id)}>
            Delete
          </button>
        </div>

        <ul className="nested-comments">
          {this.props.comments[this.props.index].reply.map((value) => {
            return (
              <ChildrenReply
                key={value.id}
                index={this.props.index}
                id={value.id}
                comment={value.reply}
              />
            );
          })}
        </ul>
        <ReplyForm id={this.props.id} />
      </li>
    );
  }
}

const propData = (state) => ({
  comments: state.comments,
});

export default connect(propData, { delComment })(Reply);
