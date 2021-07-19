import React, { useState, useEffect } from 'react'

const Search = ({queryHandler}) => {
    // const [location, setlocation] = useState('');
    // const apiKey = '0ee51fb6336e80229ec5a82837f78b1e';
    const submitHandler = (event) => {
        event.preventDefault();
        queryHandler(event.target.querySelector('.ip').value);
    }

    return (
        <div className = 'header'>
            <h1>Weather Forecast</h1>
            <form onSubmit = {submitHandler}>
                <input className='ip' type="text" placeholder='Enter city name' autoFocus/>
                <button className='btn' type='submit' >Search</button>
            </form>
        </div>
    )
}

export default Search
