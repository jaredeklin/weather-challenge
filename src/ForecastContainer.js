import React from 'react';
import { Day } from './Day';

export const ForecastContainer = ({ weatherData }) => {
  const day = weatherData.map(day => {
    return <Day weatherData={day} key={day.date + Date.now()} />;
  });

  return (
    <section className="forecast-container">
      <h4>Extended Forecast:</h4>
      {day}
    </section>
  );
};
