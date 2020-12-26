import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar/Navbar';
import { WeatherHome } from './WeatherHome/WeatherHome';
import { DayHourForecast } from './DayHourForecast/DayHourForecast';
import { getWeather } from '../API/api';
import { allMessages } from  '../Fixtures/miscData';
import { Switch, Route, useLocation } from 'react-router-dom';

export function WeatherApp() {

    const { loading,
            searching,
            badHomeUrl,
            badUrl, 
            badUrlSearch, 
            badHomeSearch, 
            networkError 
    } = allMessages;

    const location = useLocation();

    const { pathname } = location;

    const isHomeUrl = pathname === '/';

    // Do this on first App mount and home URL or cityDay URL page refresh:
    const urlCity = () => {
        if (isHomeUrl) return 'belgrade';
        const underscore = pathname.match(/_/g);
        if (!underscore || underscore.length > 1) return '';
        const urlCityArray = pathname.match(/.*(?=_)/);
        const city = urlCityArray[0].slice(1, urlCityArray[0].length);
        return city;
    };

    const [searchValue, setSearchValue] = useState(urlCity());

    const [weatherData, setWeatherData] = useState(loading);

    const { currently, daily, hourly, timezone, city, country } = weatherData;

    if (isHomeUrl && badUrl.message === weatherData.message) {
        setWeatherData(badHomeUrl);
    }

    if (isHomeUrl && badUrlSearch.message === weatherData.message) {
        setWeatherData(badHomeSearch);
    }

    const handleSearchSubmit = (e, inputValue) => {
        e.preventDefault();
        if (inputValue.current.value === '') return;
        setWeatherData(searching);
        setSearchValue(inputValue.current.value);
    }

    useEffect(() => {
        getWeather(searchValue, badUrl, badUrlSearch, networkError).then(
            res => setWeatherData(res));
        }, [searchValue, badUrl, badUrlSearch, networkError]
    );

    const weatherDataExists = Object.keys(weatherData).length > 1;

    const msgClass = weatherData => {
       switch (weatherData) {
            case loading: 
            case searching: 
                return 'happy';
            case badUrl:
            case badHomeSearch:
            case badUrlSearch:
            case networkError:
                return  'sad';
            default: //do nothing;
       }
    };

    return (
        <React.Fragment>
            <Navbar searchSubmit={handleSearchSubmit} />
            {weatherDataExists ?
            <main id='weather-app'>
                <Switch>
                    <Route exact path='/'>
                        <WeatherHome currently={currently}
                                     daily={daily}
                                     city={city}
                                     country={country}
                                     timezone={timezone}
                        />
                    </Route>
                    <Route path='/:cityDay'>
                        <DayHourForecast daily={daily}
                                         hourly={hourly}
                                         city={city}
                                         country={country}
                                         timezone={timezone}
                        />
                    </Route>
                </Switch>
            </main>
          : <div className={`message ${msgClass(weatherData)}`}>
                <p>{weatherData.message}</p>
            </div>}
        </React.Fragment>
    );
}