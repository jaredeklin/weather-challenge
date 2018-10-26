import React from 'react';

export const Day = ({ weatherData }) => {
  const { temp, imgUrl, description, date } = weatherData;

  return (
    <article className="forecast-day">
      <h4>{date}</h4>
      <h5>{temp}</h5>
      <img src={imgUrl} alt="icon" />
      <p>{description}</p>
    </article>
  );
};
