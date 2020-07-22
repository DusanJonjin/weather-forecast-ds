import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { WeatherHome } from './WeatherHome/WeatherHome';
import { DayHourForecast } from './DayHourForecast/DayHourForecast';
import { Switch, Route } from 'react-router-dom';
import fakeDataJson from '../Fixtures/fakeData.json';

export function WeatherApp() {

    const [weatherData, setWeatherData] = useState(fakeDataJson);

    const [chosenDayWeather, setChosenDayWeather] = useState({});

    const { currently, daily, hourly, timezone, city, country } = weatherData;

    const handleOneDayClick = day => {
        const dayDate = time => (
            new Date(time * 1000).toLocaleDateString('en', {timeZone: timezone})
        );
        const hoursDayDate = hourly.data.filter(
            hour => dayDate(hour.time) === dayDate(day.time)
        );
        const dayHourWeatherData = {...day, hourly: hoursDayDate};
        setChosenDayWeather(dayHourWeatherData);
    };

    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <WeatherHome currently={currently}
                                 daily={daily}
                                 city={city}
                                 country={country}
                                 timezone={timezone}
                                 oneDayClick={handleOneDayClick}
                    />
                </Route>
                <Route path='/:cityDay'>
                    <DayHourForecast chosenDayWeather={chosenDayWeather}
                                     city={city}
                                     country={country}
                                     timezone={timezone}
                    />
                </Route>
            </Switch>
        </React.Fragment>
    );
}