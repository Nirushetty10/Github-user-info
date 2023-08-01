import React, { Component } from "react";
import { Button, FormGroup, Input, InputLabel, TextField } from "@material-ui/core";
import { FormControl } from "react-bootstrap";
import axios from "axios";

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email : "",
        password : ""
      }
    }
    handleChange = (e) => {
      const {name , value} = e.target;
      this.setState({
        [name] : value
      })
    }

    postData = (data) => {
        axios.post("https://reqres.in/api/registration" , data).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email : this.state.email,
            password : this.state.password
        }
        this.postData(data);
    }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField label="email" value={this.state.email} name="email" onChange={this.handleChange}/>
          <TextField label="password" value={this.state.password} type="password" name="password" onChange={this.handleChange}/>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
