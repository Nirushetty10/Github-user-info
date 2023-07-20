import React, { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import WeatherInput from "../WeatherInput/WeatherInput";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Bangalore",
      temp: "",
      icon: "",
      text : "",
      region : ""
    };
  }

  fetchWeatherdata = async (city) => {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f3f2979318c94aa888064356231707&q=${city}&aqi=no`
      );
      let data = await response.json();
      console.log(data);
      this.setState({
        city: data.location.name,
        temp: data.current.temp_c,
        icon: data.current.condition.icon,
        text : data.current.condition.text,
        region : data.location.region
      });
    } catch (error) {
      alert(`weather data is not available for this city`);
    }
  };

  updateSearchState = (result) => {
    this.fetchWeatherdata(result);
    // this.setState({
    //     city : result
    // })
  };

  // componentDidUpdate (prvProps,prvState) {
  //   if(prvState.city !== this.state.city) {
  //     this.fetchWeatherdata(this.state.city);
  //   }
  // }

  componentDidMount() {
    this.fetchWeatherdata(this.state.city);
  }

  render() {
    return (
      <div>
        <WeatherInput onInputSubmit={this.updateSearchState} />
        <WeatherCard
          temp={this.state.temp}
          city={this.state.city}
          icon={this.state.icon}
          text={this.state.text}
          region={this.state.region}
        />
      </div>
    );
  }
}
