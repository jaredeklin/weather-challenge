import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper;
  const mockGetLocationData = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Search getLocationData={mockGetLocationData} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is a location in state', () => {
    wrapper.setState({ location: 'Denver' });
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update state with correct values', () => {
      const mockEvent = {
        target: {
          name: 'location',
          value: 'Denver'
        }
      };

      expect(wrapper.state()).toEqual({ location: '' });
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state()).toEqual({ location: 'Denver' });
    });
  });

  describe('handleSubmit', () => {
    it('should call getLoactionData with correct params and reset state', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };

      wrapper.setState({ location: 'Denver' });
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockGetLocationData).toHaveBeenCalledWith('Denver');
      expect(wrapper.state()).toEqual({ location: '' });
    });
  });
});
