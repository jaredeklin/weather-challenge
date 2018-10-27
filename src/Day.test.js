import React from 'react';
import { Day } from './Day';
import { shallow } from 'enzyme';

describe('Day', () => {
  it('should match the snapshot', () => {
    const mockProps = {
      temp: 70,
      imgUrl: 'www.url.com',
      description: 'clear',
      date: 'Sun'
    };

    const wrapper = shallow(<Day weatherData={mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
