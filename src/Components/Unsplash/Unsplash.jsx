import React, { Component } from "react";
import axios from "axios";
import { Card, CardMedia, Grid } from "@material-ui/core";

export default class Unsplash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
      loading: true,
      searchValue: ""
    };
  }

  fetchData = (val) => {
    const URL = `https://api.unsplash.com/search/photos/?query=${val}&page=5&client_id=MPQWtAgdiF2h47Ci170-6A1zZzglUEHjpTW_eMmLfBg`;
    axios.get(URL).then((res) => {
        console.log(res.data)
        this.setState({
          loading: false,
          data: res.data.results,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error:
            "Cannot get the data from server at this time.. please try after some times",
        });
      });
  };
  handleChange =(e)=> {
    this.setState({
       searchValue : e.target.value
    })
  }
  handleSubmit = () => {
    this.fetchData(this.state.searchValue)
  }
  
  render() {
    const{data} = this.state;
    console.log(data);
    return <div>
        <input type="text" placeholder="search" onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Search</button>
        <div className="imageContainer">
        <div>
      <Grid container spacing={2}>
        {data.map(source => {
            return <Grid key={source.id} item xs={3}>
            <Card>
              <CardMedia image={source.urls.regular} component="img" alt={source.alt_description} style={{height:200 , objectFit:'cover'}}/>
            </Card>
         </Grid>
        })}
      </Grid>
    </div>
        </div>
    </div>
  }
}
