import React, { useState, useEffect } from 'react'

const Search = ({queryHandler}) => {
    // const [location, setlocation] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        queryHandler(event.target.querySelector('.ip').value);
    }

    return (
        <section>
            <h1>Weather Forecast</h1>
            <form onSubmit = {submitHandler}>
                <input className='ip' type="text" placeholder='Enter city name' autoFocus/>
                <button className='btn' type='submit' >Search</button>
            </form>
        </section>
    )
}

export default Search
