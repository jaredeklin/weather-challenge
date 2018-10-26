import React from 'react';

export const Current = ({ weatherData }) => {
  const { name, temp, description, icon, date } = weatherData;
  const imgUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <section className="current-section">
      <h1>{name}</h1>
      <h4>{date}</h4>
      <h4>{temp}</h4>
      <img src={imgUrl} alt="weather icon" />
      <p>{description}</p>
    </section>
  );
};
