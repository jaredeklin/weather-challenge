import React from 'react';
import { Day } from './Day';

export const ForecastContainer = ({ weatherData }) => {
  const day = weatherData.map(day => {
    return <Day weatherData={day} />;
  });

  return <section>{day}</section>;
};
