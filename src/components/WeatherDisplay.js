import React from 'react';
import Map from './Map';
// import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import CurrentWeather from './CurrentWeather';

function WeatherDisplay({weatherInfo , city}) {
    if(!weatherInfo || ( Object.keys(weatherInfo).length === 0 && weatherInfo.constructor === Object))
    {
        console.log(weatherInfo);
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
    if(weatherInfo.cod >= 400){
        console.log('Invalid input');
        return (
            <>
            </>
        )
    }
    console.log(weatherInfo);
    return (
        <div className='fragment'>
            <CurrentWeather report = {weatherInfo} city = {city}/>
            <Map city = {city} />
            <DailyForecast weatherInfo = {weatherInfo} />
        </div>
    )
}

export default WeatherDisplay;