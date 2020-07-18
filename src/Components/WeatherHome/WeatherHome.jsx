import React from 'react';
import { CurrentWeather } from './CurrentWeather';
import { SevenDayForecast } from './SevenDayForecast';

export function WeatherHome(props) {

    return (
        <section id='weather-home'>
            <CurrentWeather />
            <SevenDayForecast />
        </section>
    );
}