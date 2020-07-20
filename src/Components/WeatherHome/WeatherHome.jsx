import React from 'react';
import { CurrentWeather } from './CurrentWeather';
import { SevenDayForecast } from './SevenDayForecast';

export function WeatherHome({ weatherData }) {

    const {currently, daily, timezone } = weatherData;



    return (
        <section id='weather-home'>
            <CurrentWeather currently={currently}
                            timezone={timezone} />
            <SevenDayForecast />
        </section>
    );
}