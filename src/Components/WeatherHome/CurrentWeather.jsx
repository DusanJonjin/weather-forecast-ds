import React from 'react';
import { CityCountry, DayDate, Image, PresHumidWind } from '../- Joint Components -/jointExport';

export function CurrentWeather({ currently, timezone, city, country }) {

    const { time ,
            icon,
            temperature,
            pressure,
            humidity,
            windSpeed } = currently;

    const fullDayDateTime = (time, timezone) => (
        new Date(time * 1000).toLocaleDateString(
            'en',
            {
                weekday: 'long',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: timezone
            }
        )
    );

    return (
        <div id='current-weather'>
            <CityCountry city={city}
                         country={country}/>
            <DayDate dayDate={fullDayDateTime(time, timezone)} />
            <Image imgSrc={require(`../../Images/${icon}.png`)}
                   imgAlt={icon} />
            <p>{temperature.toFixed(1)}</p>
            <PresHumidWind pressure={pressure}
                           humidity={humidity}
                           windSpeed={windSpeed} />
        </div>
    );
}