import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
const App = () => {
  //   const [weather, setWeather] = useState();

  //   const getReport = async (event) => {
  //     event.preventDefault();
  //     const city = event.target.querySelector('.ip').value;
  //     const data = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=28.38&lon=77.12&appid=0ee51fb6336e80229ec5a82837f78b1e')
  //         .then((response) => {
  //             return response.json();
  //         })
  //     setWeather(data);
  //     console.log(weather);
  // }
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState();

  useEffect(() => {
    const getReport = async () => {
      // const city = event.target.querySelector('.ip').value;
      const data = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=28.38&lon=77.12&appid=0ee51fb6336e80229ec5a82837f78b1e')
        .then((response) => {
          return response.json();
        })
      setWeather(data);
      console.log(weather);
    }
    getReport();
  }, [query])

  return (
    <div className="App">
      <Header queryHandler = {(q) => setQuery(q)}/>
    </div>
  );
}

export default App;
