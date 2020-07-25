import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { WeatherHome } from './WeatherHome/WeatherHome';
import { DayHourForecast } from './DayHourForecast/DayHourForecast';
import { Switch, Route } from 'react-router-dom';
import fakeDataJson from '../Fixtures/fakeData.json';

export function WeatherApp() {

    const [weatherData, setWeatherData] = useState(fakeDataJson);

    const { currently, daily, hourly, timezone, city, country } = weatherData;

    return (
        <React.Fragment>
            <Navbar />
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
        </React.Fragment>
    );
}

//navbar search (back) hide show