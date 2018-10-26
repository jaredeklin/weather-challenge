const apiKey = process.env.REACT_APP_WEATHER_KEY;

export class Api {
  getCurrent = async location => {
    const currentResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location},us&type=like&appid=${apiKey}&units=imperial`
    );

    const currentData = await currentResponse.json();
    const { name, id, main, weather } = currentData;

    return {
      name,
      id,
      temp: main.temp.toFixed(),
      description: weather[0].main,
      icon: weather[0].icon
    };
  };
}
