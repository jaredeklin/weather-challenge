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
      error: false
    };

    this.api = new Api();
  }

  getLocationData = async location => {
    this.setState({ error: false });
    const weatherData = await this.api.getCurrent(location);

    if (!weatherData) {
      this.setState({ error: true });
      return null;
    }

    this.setState({
      currentLocation: weatherData.name,
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
