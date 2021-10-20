import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import WeatherDisplay from './components/WeatherDisplay'


const App = () => {

  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('London');
  let lat, lon;
  useEffect(() => {
    const getReport = async () => {
      let data=null, tempData;
      try{
        tempData = await fetch(
          `http://localhost:5000/api/?q=${query}`
        ).then((response) => response.json());
        //  .catch((error) => console.log(error));
  
        lat = tempData.coord.lat;
        lon = tempData.coord.lon;
        data = await fetch(
          `http://localhost:5000/coord/?lat=${lat}&lon=${lon}`
        ).then((response) => response.json());
          // .catch((error) => console.log(error));
      }
      catch(error){
        console.log(error);
        alert("Please enter a valid location!");
      }
      // console.log(tempData);
      console.log(data);
      // console.log(lat, lon);
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
