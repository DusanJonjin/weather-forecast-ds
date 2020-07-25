import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar(props) {

    const location = useLocation();

    const { pathname } = location;

    const isHomeUrl = pathname === '/';

    return(
        <nav id='navbar'>
            <p><img src={require(`./../../Images/icon.png`)} alt='weather_app_icon'/>
                Weather Forecast
            </p>
            <form onSubmit={props.searchSubmit} 
                  style={isHomeUrl ? {display: 'flex'} : {display:'none'}}
            >
                <input type='search' value={props.searchValue} 
                       onChange={props.searchChange} placeholder='Enter name of the city...'/>
                <input id='button' type='submit' value='Search' />
            </form>
            <Link to='/' className={`link ${isHomeUrl && 'hide'}`}
            >
                <div id='back'>
                    ◄ Back to Weather home ☼
                </div>
            </Link>
        </nav>
    );
}