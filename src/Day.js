import React from 'react';
const moment = require('moment');

export const Day = ({ weatherData }) => {
  const { main, weather, dt_txt } = weatherData;
  const imgUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
  const date = moment(dt_txt).format('ddd');

  return (
    <article className="forecast-day">
      <h4>{date}</h4>
      <h5>{main.temp.toFixed()}</h5>
      <img src={imgUrl} alt="icon" />
      <p>{weather[0].main}</p>
    </article>
  );
};
