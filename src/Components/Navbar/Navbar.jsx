import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar({ searchSubmit }) {

    const location = useLocation();

    const inputSearchValue = useRef(null)

    const { pathname } = location;

    const isHomeUrl = pathname === '/';

    return(
        <nav id='navbar'>
            <p><img src={require(`./../../Images/icon.png`)} alt='weather_app_icon'/>
                Weather Forecast
            </p>
            <form onSubmit={e => searchSubmit(e, inputSearchValue)} 
                  style={isHomeUrl ? {display: 'flex'} : {display:'none'}}
            >
                <input type='search'  
                       placeholder='Enter name of a city...'
                       ref={inputSearchValue} />
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