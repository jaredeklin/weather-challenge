import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { mockExpectedCurrentData } from './mockData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('getLocationData', () => {
    const mockLocation = 'Denver';

    it('should call api.getCurrent with correct params', async () => {
      const mockGetCurrent = (wrapper.instance().api.getCurrent = jest.fn());

      wrapper.instance().getLocationData(mockLocation);
      expect(mockGetCurrent).toHaveBeenCalledWith(mockLocation);
    });

    it('shpuld update error state if getCurrent returns with an error', async () => {
      wrapper.instance().api.getCurrent = jest.fn().mockReturnValue(null);

      await wrapper.instance().getLocationData(mockLocation);
      expect(wrapper.state('error')).toEqual(true);
    });

    it('should setState with correct weather data', async () => {
      const expectedState = {
        currentLocation: 'Denver',
        weatherData: mockExpectedCurrentData,
        error: false
      };

      wrapper.instance().api.getCurrent = jest
        .fn()
        .mockReturnValue(mockExpectedCurrentData);

      await wrapper.instance().getLocationData(mockLocation);
      expect(wrapper.state()).toEqual(expectedState);
    });
  });
});
