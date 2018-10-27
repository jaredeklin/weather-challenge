import React from 'react';
import { Current } from './Current';
import { shallow } from 'enzyme';

describe('Current', () => {
  it('should match the snapshot', () => {
    const mockProps = {
      name: 'Denver',
      temp: 70,
      imgUrl: 'www.url.com',
      description: 'clear',
      date: 'Sun'
    };

    const wrapper = shallow(<Current weatherData={mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
