export const mockCurrentData = {
  base: 'stations',
  clouds: { all: 1 },
  cod: 200,
  coord: { lon: -104.98, lat: 39.74 },
  dt: 1540593360,
  id: 5419384,
  main: {
    temp: 66.18,
    pressure: 1019,
    humidity: 14,
    temp_min: 55.4,
    temp_max: 71.6
  },
  name: 'Denver',
  sys: {
    type: 1,
    id: 602,
    message: 0.0049,
    country: 'US',
    sunrise: 1540560180
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01d',
      id: 800,
      main: 'Clear'
    }
  ],
  wind: { speed: 5.82, deg: 50 }
};

export const mockForecastData = {
  city: {
    coord: { lat: 39.7392, lon: -104.9848 },
    country: 'US',
    id: 5419384,
    name: 'Denver'
  },
  cnt: 40,
  cod: '200',
  list: [
    {
      clouds: { all: 0 },
      dt: 1540598400,
      dt_txt: '2018-10-27 00:00:00',
      main: {
        temp: 59.97,
        temp_min: 54.85,
        temp_max: 59.97,
        pressure: 818.16,
        sea_level: 1026.38
      },
      sys: { pod: 'n' },
      weather: [
        {
          description: 'clear sky',
          icon: '01n',
          id: 800,
          main: 'Clear'
        }
      ],
      wind: { speed: 8.77, deg: 314.503 }
    },
    {
      clouds: { all: 0 },
      dt: 1540598400,
      dt_txt: '2018-10-27 18:00:00',
      main: {
        temp: 59.97,
        temp_min: 54.85,
        temp_max: 59.97,
        pressure: 818.16,
        sea_level: 1026.38
      },
      sys: { pod: 'n' },
      weather: [
        {
          description: 'clear sky',
          icon: '01n',
          id: 800,
          main: 'Clear'
        }
      ],
      wind: { speed: 8.77, deg: 314.503 }
    },
    {
      clouds: { all: 0 },
      dt: 1540598400,
      dt_txt: '2018-10-27 18:00:00',
      main: {
        temp: 59.97,
        temp_min: 54.85,
        temp_max: 59.97,
        pressure: 818.16,
        sea_level: 1026.38
      },
      sys: { pod: 'n' },
      weather: [
        {
          description: 'clear sky',
          icon: '01n',
          id: 800,
          main: 'Clear'
        }
      ],
      wind: { speed: 8.77, deg: 314.503 }
    },
    {
      clouds: { all: 0 },
      dt: 1540598400,
      dt_txt: '2018-10-27 18:00:00',
      main: {
        temp: 59.97,
        temp_min: 54.85,
        temp_max: 59.97,
        pressure: 818.16,
        sea_level: 1026.38
      },
      sys: { pod: 'n' },
      weather: [
        {
          description: 'clear sky',
          icon: '01n',
          id: 800,
          main: 'Clear'
        }
      ],
      wind: { speed: 8.77, deg: 314.503 }
    },
    {
      clouds: { all: 0 },
      dt: 1540598400,
      dt_txt: '2018-10-27 18:00:00',
      main: {
        temp: 59.97,
        temp_min: 54.85,
        temp_max: 59.97,
        pressure: 818.16,
        sea_level: 1026.38
      },
      sys: { pod: 'n' },
      weather: [
        {
          description: 'clear sky',
          icon: '01n',
          id: 800,
          main: 'Clear'
        }
      ],
      wind: { speed: 8.77, deg: 314.503 }
    },
    {
      clouds: { all: 0 },
      dt: 1540598400,
      dt_txt: '2018-10-27 18:00:00',
      main: {
        temp: 59.97,
        temp_min: 54.85,
        temp_max: 59.97,
        pressure: 818.16,
        sea_level: 1026.38
      },
      sys: { pod: 'n' },
      weather: [
        {
          description: 'clear sky',
          icon: '01n',
          id: 800,
          main: 'Clear'
        }
      ],
      wind: { speed: 8.77, deg: 314.503 }
    },
    {
      clouds: { all: 0 },
      dt: 1540598400,
      dt_txt: '2018-10-27 15:00:00',
      main: {
        temp: 59.97,
        temp_min: 54.85,
        temp_max: 59.97,
        pressure: 818.16,
        sea_level: 1026.38
      },
      sys: { pod: 'n' },
      weather: [
        {
          description: 'clear sky',
          icon: '01n',
          id: 800,
          main: 'Clear'
        }
      ],
      wind: { speed: 8.77, deg: 314.503 }
    }
  ]
};

export const mockExpectedForecastData = [
  {
    date: 'Sat',
    description: 'Clear',
    imgUrl: 'http://openweathermap.org/img/w/01n.png',
    temp: '60'
  },
  {
    date: 'Sat',
    description: 'Clear',
    imgUrl: 'http://openweathermap.org/img/w/01n.png',
    temp: '60'
  },
  {
    date: 'Sat',
    description: 'Clear',
    imgUrl: 'http://openweathermap.org/img/w/01n.png',
    temp: '60'
  },
  {
    date: 'Sat',
    description: 'Clear',
    imgUrl: 'http://openweathermap.org/img/w/01n.png',
    temp: '60'
  },
  {
    date: 'Sat',
    description: 'Clear',
    imgUrl: 'http://openweathermap.org/img/w/01n.png',
    temp: '60'
  }
];

export const mockExpectedCurrentData = {
  date: 'Saturday, December 1st',
  description: 'Clear',
  forecast: [
    {
      date: 'Sat',
      description: 'Clear',
      imgUrl: 'http://openweathermap.org/img/w/01n.png',
      temp: '60'
    },
    {
      date: 'Sat',
      description: 'Clear',
      imgUrl: 'http://openweathermap.org/img/w/01n.png',
      temp: '60'
    },
    {
      date: 'Sat',
      description: 'Clear',
      imgUrl: 'http://openweathermap.org/img/w/01n.png',
      temp: '60'
    },
    {
      date: 'Sat',
      description: 'Clear',
      imgUrl: 'http://openweathermap.org/img/w/01n.png',
      temp: '60'
    },
    {
      date: 'Sat',
      description: 'Clear',
      imgUrl: 'http://openweathermap.org/img/w/01n.png',
      temp: '60'
    }
  ],
  id: 5419384,
  imgUrl: 'http://openweathermap.org/img/w/01d.png',
  name: 'Denver',
  temp: '66'
};
