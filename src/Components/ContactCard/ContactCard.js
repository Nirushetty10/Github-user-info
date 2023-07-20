import React, { Component } from "react";

class ContactCard extends Component {
  componentWillUnmount() {
    console.log("Component is deleted");
  }
  render() {
    return (
      <div className="contact-div" key={this.props.data.id}>
        <div className="contact-item">{this.props.data.name}</div>
        <div className="contact-item">{this.props.data.mobile}</div>
        <button
          className="deleteButton"
          onClick={() => this.props.deleteUser(this.props.data.id)}
        >
          delete
        </button>
      </div>
    );
  }
}

export default ContactCard;
