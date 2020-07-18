import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { WeatherHome } from './WeatherHome/WeatherHome';
import { DayHourForecast } from './DayHourForecast/DayHourForecast';

export function WeatherApp() {

    return (
        <React.Fragment>
            <Navbar />
            <main>
                <WeatherHome />
                <DayHourForecast />
            </main>
        </React.Fragment>
    );
}