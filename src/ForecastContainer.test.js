import React from 'react';
import { shallow } from 'enzyme';
import { ForecastContainer } from './ForecastContainer';
import { mockExpectedCurrentData } from './mockData';

describe('ForecastContainer', () => {
  it('should match the snapshot', () => {
    const mockWeatherData = mockExpectedCurrentData.forecast;
    Date.now = jest.fn().mockReturnValue('Sat1540668552595');

    const wrapper = shallow(
      <ForecastContainer weatherData={mockWeatherData} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
