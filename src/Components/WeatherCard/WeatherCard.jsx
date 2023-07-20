import Card from 'react-bootstrap/Card';

import React, { Component } from 'react'

export default class WeatherCard extends Component {
  render() {
    return (
        <Card style={{ width : "20rem",height : "16rem", margin : "3rem auto" , textAlign : "center" }}>
        <Card.Body>
          <Card.Title>Weather Report</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">{this.props.city}</Card.Subtitle>
          <p>{this.props.region}</p>
          <Card.Text>
            Current temperature is {this.props.temp}
          </Card.Text>
          <div>
            <h6>{this.props.text}</h6>
          <img src={this.props.icon} alt="" />
        </div>
        </Card.Body>
        
      </Card>
    )
  }
}


