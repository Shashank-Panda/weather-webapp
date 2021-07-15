import React, { useState, useEffect } from 'react'

const Search = () => {
    const [location, setlocation] = useState('');
    const getReport = async (event) => {
        event.preventDefault();
        const data = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=28.38&lon=77.12&appid=0ee51fb6336e80229ec5a82837f78b1e')
            .then((response) => {
                return response.json();
            })
        console.log(data);
    }
    // 
    
    return (
        <div>
            <h1>Weather Forecast</h1>
            <form>
                <input className='ip' type="text" placeholder='Enter city name' autoFocus value={location} onChange />
                <button className='btn' onClick={getReport}>Search</button>
            </form>
        </div>
    )
}

export default Search
