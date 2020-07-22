import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(props) {

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

            <Link to='/' className='link'>
                <div id='back'>
                    ◄ Back to Forecast home ☼
                </div>
            </Link>

        </nav>
    );
}