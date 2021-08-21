import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import WeatherDisplay from './components/WeatherDisplay'

//const apiKey = "2ea4f80d555c6483930d899a64eac074";
const apiKey = "15fe71c149e289ae0f8cb40cedea49d1";
//const apiKey = "0ee51fb6336e80229ec5a82837f78b1e";

const App = () => {

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
