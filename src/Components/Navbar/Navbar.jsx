import React from 'react';

export function Navbar(props) {

    // Combine input value with state so that the state will be the single source of truth!
    // When a user inputs some text, it will automaticly be set as state in parent comp,
    // and then, that state will be passed down to be the value of this components form input!
    return(
        <nav id='navbar'>

            <p><img src={require(`./../../Images/icon.png`)} alt='nav-weather-icon'/>
                Weather Forecast
            </p>

            <form onSubmit={props.searchSubmit}>
                <input type='search' value={props.searchValue} 
                       onChange={props.searchChange} placeholder='Enter name of the city...'/>
                <input id='button' type='submit' value='Search' />
            </form>

        </nav>
    );
}