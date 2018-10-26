import React from 'react';

export const Current = ({ currentData }) => {
  const { name, temp, description, icon } = currentData;
  const imgUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <section>
      <h1>{name}</h1>
      <img src={imgUrl} alt="weather icon" />
    </section>
  );
};
