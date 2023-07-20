import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import React, { Component } from 'react'

export default class WeatherInput extends Component {
    constructor(props) {
      super(props)
      this.state = {
         citySearch : ""
      }
    }

    searchHandler = (input)=> {
        this.setState({
            citySearch : input
        })
    }

    submitHandler = ()=> {
        this.props.onInputSubmit(this.state.citySearch);
    }


  render() {
    return (
        <InputGroup className="mb-3" style={{width : "50rem", margin : "3rem auto"}}>
        
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          onChange={(e) => this.searchHandler(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={this.submitHandler}>
          Button
        </Button>
      </InputGroup>
    )
  }
}
