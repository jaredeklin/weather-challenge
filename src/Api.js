const apiKey = process.env.REACT_APP_WEATHER_KEY;
const moment = require('moment');

export class Api {
  getCurrent = async location => {
    const currentResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location},us&type=like&appid=${apiKey}&units=imperial`
    );

    const currentData = await currentResponse.json();
    const { name, id, main, weather } = currentData;
    const date = moment().format('dddd, MMMM Do');

    return {
      name,
      id,
      temp: main.temp.toFixed(),
      description: weather[0].main,
      icon: weather[0].icon,
      date
    };
  };

  getForecast = async location => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${location}&appid=${apiKey}&units=imperial`
    );

    const forecastData = await response.json();
    const fiveDay = forecastData.list.filter(day =>
      day.dt_txt.includes('18:00')
    );

    return fiveDay;
  };
}
