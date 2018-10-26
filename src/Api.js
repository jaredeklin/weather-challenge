const apiKey = process.env.REACT_APP_WEATHER_KEY;
const moment = require('moment');

export class Api {
  getCurrent = async location => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
    const query = `q=${location},us&type=like&appid=${apiKey}&units=imperial`;

    const currentResponse = await fetch(`${baseUrl}${query}`);

    if (!currentResponse.ok) {
      return 'error';
    }
    const currentData = await currentResponse.json();

    const { name, id, main, weather } = currentData;
    const imgUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    const date = moment().format('dddd, MMMM Do');

    const currentWeather = {
      name,
      id,
      temp: main.temp.toFixed(),
      description: weather[0].main,
      imgUrl,
      date
    };

    const forecast = await this.getForecast(id);
    const weatherData = { ...currentWeather, forecast };

    return weatherData;
  };

  getForecast = async location => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
    const query = `id=${location}&appid=${apiKey}&units=imperial`;
    const response = await fetch(`${baseUrl}${query}`);

    if (!response.ok) {
      return 'error';
    }

    const forecastData = await response.json();
    const fiveDay = forecastData.list.filter(day =>
      day.dt_txt.includes('18:00')
    );

    const cleanForecast = fiveDay.reduce((forecastArray, day) => {
      const { main, weather, dt_txt } = day;
      const date = moment(dt_txt).format('ddd');
      const imgUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
      const forecast = {
        date,
        imgUrl,
        description: weather[0].main,
        temp: main.temp.toFixed()
      };

      return [...forecastArray, forecast];
    }, []);

    console.log(cleanForecast);
    return cleanForecast;
  };
}
