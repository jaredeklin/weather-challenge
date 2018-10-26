import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import { Api } from './Api';
import { Current } from './Current';
import { ForecastContainer } from './ForecastContainer';
import { Error } from './Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: '',
      weatherData: {},
      error: false,
      loading: false
    };

    this.api = new Api();
  }

  getLocationData = async location => {
    const currentData = await this.api.getCurrent(location);
    const forecastData = await this.api.getForecast(currentData.id);
    console.log(currentData, forecastData);

    const weatherData = { ...currentData, forecast: forecastData };

    this.setState({
      currentLocation: currentData.name,
      weatherData
    });
  };

  render() {
    const { currentLocation, weatherData, error } = this.state;
    return (
      <div className="App">
        <Search getLocationData={this.getLocationData} />
        {error && <Error />}
        {!error && (
          <div>
            {currentLocation === '' && (
              <h1>Hello! Enter a location to view the weather</h1>
            )}
            {currentLocation !== '' && (
              <section>
                <Current weatherData={weatherData} />
                <ForecastContainer weatherData={weatherData.forecast} />
              </section>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
