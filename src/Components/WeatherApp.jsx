import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { WeatherHome } from './WeatherHome/WeatherHome';
import { DayHourForecast } from './DayHourForecast/DayHourForecast';
import { Switch, Route } from 'react-router-dom';
import fakeDataJson from '../Fixtures/fakeData.json';

export function WeatherApp() {

    const [weatherData, setWeatherData] = useState(fakeDataJson);


    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <WeatherHome weatherData={weatherData} />
                </Route>
                <Route path='/:cityDay'>
                    <DayHourForecast />
                </Route>
            </Switch>
        </React.Fragment>
    );
}