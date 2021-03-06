import React from 'react';
import { OneDayCard } from './OneDayCard';
import { dayDate } from '../../Utilities/heleperFunctions';
import { Link } from 'react-router-dom';

export function SevenDayForecast(props) {

    const { daily,
            currentWeatherTime,
            city,
            timezone } = props;


    const sevenDays = daily.data.map(day => 
        <li key={day.time}>
            <Link to={{pathname:`/${city + '_' + dayDate(day.time, {timeZone: timezone})}`}}
                  className='link'
            >
                <OneDayCard day={day} 
                            currentWeatherTime={currentWeatherTime}
                            timezone={timezone} 
                />
            </Link>
        </li>
    );

    return (
        <div id='seven-day-forecast'>
            <h3>
                7-day forecast
            </h3>
            <ul>
                {sevenDays}
            </ul>
        </div>
    );
}