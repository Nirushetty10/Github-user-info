import React, { Component } from "react";
import Image from "../Image/Image";
import "./Cource.scss";

export default class Cource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      images: []
    };
  }
  
  fetchData = async (query) => {
    const apiKey = "80d3debe403641f19f31694caaaf6161";
    try {
      let response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=10&format=json&nojsoncallback=1`
      );
      let data = await response.json();
      let url = data.photos.photo.map((photo) => {
        const url = {
          id: photo.id,
          url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        };
        return url;
      });
      this.setState({ images: url});
    } catch (err) {
      console.log(err);
    }
  };

  queryHandler = (value) => {
    this.setState({
      query: value
    });
  };

  searchHandler = () => {
    this.fetchData(this.state.query);
  };

  render() {
    let result = this.state.images.map((image) => {
      return <Image key={image.id} link={image.url} />;
    });
    return (
      <div className="layout">
        <div className="search-section">
          <input
            type="text"
            onChange={(e) => this.queryHandler(e.target.value)}
            placeholder="Search for image...."
          />
          <button onClick={this.searchHandler}>Search</button>
        </div>
        <div className="photos">{result}</div>
      </div>
    );
  }
}
