import React from 'react';

export const Current = ({ weatherData }) => {
  const { name, temp, description, imgUrl, date } = weatherData;

  return (
    <section className="current-section">
      <div className="current-name">
        <h1>{name}</h1>
        <h4>{date}</h4>
      </div>
      <div className="current-info">
        <h4>{temp}</h4>
        <img src={imgUrl} alt="weather icon" />
        <p>{description}</p>
      </div>
    </section>
  );
};
