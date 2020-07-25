import React from 'react';
import { CurrentWeather } from './CurrentWeather';
import { SevenDayForecast } from './SevenDayForecast';

export function WeatherHome(props) {

    const { 
        currently,
        daily,
        timezone,
        city,
        country
    } = props;
    
    const currentWeatherTime = currently.time;
    
    return (
        <section id='weather-home'>
            <CurrentWeather currently={currently}
                            timezone={timezone}
                            city={city}
                            country={country} 
            />
            <SevenDayForecast daily={daily}
                              currentWeatherTime={currentWeatherTime}
                              timezone={timezone}
                              city={city} 
            />
        </section>
    );
}