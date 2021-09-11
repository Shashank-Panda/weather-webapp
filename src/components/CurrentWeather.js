import React from 'react'

const CurrentWeather = ({ report, city }) => {
    if (report.cod >= 400) {
        // console.log('Invalid input');
        return (
            <>
            </>
        )
    }
    // console.log(report);
    let windDir;
    if (report.current.wind_deg === 0) {
        windDir = 'W';
    } else if (report.current.wind_deg > 0 && report.current.wind_deg < 90) {
        windDir = 'NW';
    } else if (report.current.wind_deg === 90) {
        windDir = 'N';
    } else if (report.current.wind_deg > 90 && report.current.wind_deg < 180) {
        windDir = 'NE';
    } else if (report.current.wind_deg === 180) {
        windDir = 'E';
    } else if (report.current.wind_deg > 180 && report.current.wind_deg < 270) {
        windDir = 'SE';
    } else if (report.current.wind_deg === 270) {
        windDir = 'S';
    } else if (report.current.wind_deg > 270 && report.current.wind_deg < 360) {
        windDir = 'SW';
    }

    let temperature = Math.round(report.current.temp - 273.15);
    let feels_like = Math.round(report.current.feels_like - 273.15);

    const dt = report.current.dt;
    const offset = report.timezone_offset;
    const local = 19800;

    let weekDay, month, year, day;
    function Unix_timestamp(t) {
        let dt = new Date(t * 1000);
        weekDay = dt.toLocaleString("en-US", {weekday: "long"});
        month = dt.toLocaleString("en-US", {month: "long"});
        year = dt.toLocaleString("en-US", {year: "numeric"});
        day = dt.toLocaleString("en-US", {day: "numeric"});
        let hr = dt.getHours();
        let m = "0" + dt.getMinutes();
        // let s = "0" + dt.getSeconds();
        return hr + ':' + m.substr(-2);
    }
    
    const time = Unix_timestamp(dt-local+offset);
    // console.log(temperature);
    return (
        <div className='current'>
            <h1 className='cityname'>{city}</h1>
            <h3>{weekDay}, {day}th {month}</h3>
            <h3>{time}</h3>
            <h1>Temperature: {temperature} °C</h1>
            <h3>Feels like: {feels_like} °C</h3>
            <h3>{report.current.weather[0].description}</h3>
            <h3>Humidity: {report.current.humidity} %</h3>
            <h3>Pressure: {report.current.pressure} hPa</h3>
            <h3>Visibility: {report.current.visibility / 1000} km</h3>
            <h3>Wind: {report.current.wind_speed} m/s {windDir}</h3>
        </div>
    )
}

export default CurrentWeather
