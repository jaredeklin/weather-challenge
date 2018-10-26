import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import { Api } from './Api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: '',
      weatherData: [],
      error: false,
      loading: false
    };

    this.api = new Api();
  }

  getLocationData = async location => {
    const currentData = await this.api.getCurrent(location);
    const weatherData = [...this.state.weatherData, currentData];
    this.setState({
      currentLocation: currentData.name,
      weatherData
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Search getLocationData={this.getLocationData} />
      </div>
    );
  }
}

export default App;
