import React from 'react';
import { City, Day, Image, PresHumidWind } from '../- Joint Components -/jointExport';

export function CurrentWeather({ currently, timezone, city='Belgrade' }) {

    const { time ,
            icon,
            temperature,
            pressure,
            humidity,
            windSpeed } = currently;

    const dayDateTime = time => 
        new Date(time * 1000).toLocaleDateString(
            'en',
            {
                weekday: 'long',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: `${timezone}`
            }
        );

    return (
        <div id='current-weather'>
            <City city={city}/>
            <Day day={dayDateTime(time)} />
            <Image imgSrc={require(`../../Images/${icon}.png`)}
                   imgAlt={icon} />
            <p>{temperature.toFixed(1)}</p>
            <PresHumidWind pressure={pressure}
                           humidity={humidity}
                           windSpeed={windSpeed} />
        </div>
    );
}