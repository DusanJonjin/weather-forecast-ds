import React from 'react';
import { CityCountry, DayDate, Image, TempLowHigh, PresHumidWind } from '../- Joint Components -/jointExport';
import { dayDate } from '../../Utilities/heleperFunctions';

export function DayForecast({ daily, city, country, timezone, clickedDate }) {

    const filteredDailyData = daily.data.filter(
        day => dayDate(day.time, {timeZone: timezone}) === clickedDate
    );

    const chosenDay = filteredDailyData[0];

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
            <Image imgSrc={require(`../../Images/${icon}.png`)}
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