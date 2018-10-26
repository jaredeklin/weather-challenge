import React from 'react';

export const Day = ({ weatherData }) => {
  const { temp, icon, descrtiption } = weatherData;
  const imgUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <artice className="forecast-day">
      <h5>{temp}</h5>
      <img src={imgUrl} alt="icon" />
      <p>{descrtiption}</p>
    </artice>
  );
};
