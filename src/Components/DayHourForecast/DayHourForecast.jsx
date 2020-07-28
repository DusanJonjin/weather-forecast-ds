import React from 'react';
import { DayForecast } from './DayForecast';
import { HourForecast } from './HourForecast';
import { dayDate } from '../../Utilities/heleperFunctions';
import { useLocation } from 'react-router-dom';
import { allMessages } from '../../Fixtures/miscData';

export function DayHourForecast(props) {

    const { daily, hourly, city, country, timezone } = props;

    const { badDate } = allMessages;

    const location = useLocation();

    const { pathname } = location;

    const clickedDateArray = pathname.match(/(?<=_).*/);
    //If there is a match, date exists:
    const clickedDate = clickedDateArray && clickedDateArray[0];

    //All dates from daily object in one array:
    const allDailyDatesArr = daily.data.map(day =>
        dayDate(day.time, {timeZone: timezone})
    );

    const noDate = 
        <div className='message'>
            {badDate.message}
        </div>
    ;

    if (!clickedDate || !allDailyDatesArr.includes(clickedDate)) return noDate;

    const chosenDay = daily.data.filter(
        day => dayDate(day.time, {timeZone: timezone}) === clickedDate
    )[0];

    const chosenDayHours = hourly.data.filter(
        hour => dayDate(hour.time, {timeZone: timezone}) === clickedDate
    );
    
    return (
        <section id='day-hour-forecast'>          
            <DayForecast chosenDay={chosenDay}
                         city={city}
                         country={country}
                         timezone={timezone}                      
            />
            <HourForecast chosenDayHours={chosenDayHours}
                          timezone={timezone}
            />           
        </section>
    );
}