import React from 'react';
import { CityCountry, DayDate, Image, TempLowHigh, PresHumidWind } from '../- Joint Components -/jointExport';

export function DayForecast({ chosenDay, city, country, timezone }) {

    const { time,
            summary,
            icon,
            temperatureMin,
            temperatureMax,
            pressure,
            humidity,
            windSpeed
    } = chosenDay;

    const fullDayDate = time => (
        new Date(time * 1000).toLocaleDateString(
            'en',
            {
                weekday:'long',
                year:'numeric',
                month:'long', 
                day:'2-digit', 
                timeZone: timezone
            }
        )
    );

    return (
        <div id='day-forecast'>
            <CityCountry city={city} 
                         country={country}
            />
            <DayDate dayDate={fullDayDate(time)} />
            <p id='summary'>{summary}</p>
            <Image imgSrc={require(`../../Images/${icon}.png`).default}
                   imgAlt={icon}
            />
            <TempLowHigh tempLow={temperatureMin.toFixed(1) + '°C'}
                         tempHigh={temperatureMax.toFixed(1) + '°C'}
            />
            <PresHumidWind pressure={pressure}
                           humidity={humidity}
                           windSpeed={windSpeed}
            />
        </div>
    );
}