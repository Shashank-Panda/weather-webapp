import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import WeatherDisplay from './components/WeatherDisplay'
import CurrentWeather from './components/CurrentWeather'
const App = () => {

  const apiKey = '15fe71c149e289ae0f8cb40cedea49d1';
  
  // const sample = `{
  //     "coord": {
  //       "lon": -122.08,
  //       "lat": 37.39
  //     },
  //     "weather": [
  //       {
  //         "id": 800,
  //         "main": "Clear",
  //         "description": "clear sky",
  //         "icon": "01d"
  //       }
  //     ],
  //     "base": "stations",
  //     "main": {
  //       "temp": 282.55,
  //       "feels_like": 281.86,
  //       "temp_min": 280.37,
  //       "temp_max": 284.26,
  //       "pressure": 1023,
  //       "humidity": 100
  //     },
  //     "visibility": 16093,
  //     "wind": {
  //       "speed": 1.5,
  //       "deg": 350
  //     },
  //     "clouds": {
  //       "all": 1
  //     },
  //     "dt": 1560350645,
  //     "sys": {
  //       "type": 1,
  //       "id": 5122,
  //       "message": 0.0139,
  //       "country": "US",
  //       "sunrise": 1560343627,
  //       "sunset": 1560396563
  //     },
  //     "timezone": -25200,
  //     "id": 420006353,
  //     "name": "Mountain View",
  //     "cod": 200
  //   }`;
  // const sampleJs = JSON.parse(sample);
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('London');
  let lat, lon;
  useEffect(() => {
    const getReport = async () => {
      const tempData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      ).then((response) => response.json())
       .catch((error) => console.log(error));

      lat = tempData.coord.lat;
      lon = tempData.coord.lon;
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error));
      console.log(tempData);
      console.log(data);
      console.log(lat, lon);
      setWeather(data);
    };
    getReport();
  }, [query]);

  return (
    <div className="App">
      <Header queryHandler={(q) => setQuery(q)} />
      <WeatherDisplay weatherInfo={weather} city={query} />
    </div>
  );
}

export default App;
