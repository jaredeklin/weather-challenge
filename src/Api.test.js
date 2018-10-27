import { Api } from './Api';
import {
  mockCurrentData,
  mockForecastData,
  mockExpectedForecastData,
  mockExpectedCurrentData
} from './mockData';
const apiKey = process.env.REACT_APP_WEATHER_KEY;
const MockDate = require('mockdate');
const moment = require('moment');

describe('Api', () => {
  const api = new Api();
  MockDate.set(moment('20181201'));

  describe('getForecast method', () => {
    beforeEach(() => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockForecastData)
        })
      );
    });

    it('should call fetch with the correct params', () => {
      api.getForecast(5419384);
      const expected = `http://api.openweathermap.org/data/2.5/forecast?id=5419384&appid=${apiKey}&units=imperial`;

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return the correct value', async () => {
      expect(await api.getForecast(5419388)).toEqual(mockExpectedForecastData);
    });

    it('should return error if response not ok', async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false
        })
      );

      expect(await api.getForecast()).toEqual('error');
    });
  });

  describe('getCurrent method', () => {
    beforeEach(() => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCurrentData)
        })
      );
    });

    it('should call fetch with correct params', () => {
      const expected = `http://api.openweathermap.org/data/2.5/weather?q=Denver,us&type=like&appid=${apiKey}&units=imperial`;

      api.getCurrent('Denver');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return the correct values', async () => {
      api.getForecast = jest.fn().mockReturnValue(mockExpectedForecastData);

      expect(await api.getCurrent('Denver')).toEqual(mockExpectedCurrentData);
    });

    it('should return error if response not ok', async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false
        })
      );

      expect(await api.getCurrent()).toEqual('error');
    });
  });
});
