import React from 'react';
import { DayDate, Image, TempLowHigh } from '../- Joint Components -/jointExport';
import { dayDate } from '../../Utilities/heleperFunctions';

export function OneDayCard({ day, oneDayClick, currentWeatherTime, timezone }) {

    const { time,
            icon,
            temperatureMin,
            temperatureMax } = day; 

    const dayDateValue = 
        dayDate(time, {timeZone: timezone}) === dayDate(currentWeatherTime, {timeZone: timezone}) ? 
            'Today'
          : dayDate(time, {weekday:'long', timeZone: timezone})
    ;

    const dateValue = 
        dayDate(time, {timeZone: timezone}) === dayDate(currentWeatherTime, {timeZone: timezone}) ? 
            ''
          : dayDate(time, {month: 'long', day: '2-digit', timeZone: timezone})
    ;

    return (
        <div onClick={oneDayClick}
             className='one-day-card'>
            <DayDate dayDate={dayDateValue}
                         date={dateValue} />
            <Image imgSrc={require(`../../Images/${icon}.png`)}
                   imgAlt={icon} />
            <TempLowHigh tempLow={temperatureMin.toFixed(1) + '°C'}
                         tempHigh={temperatureMax.toFixed(1) + '°C'} />
        </div>
    );
}
    