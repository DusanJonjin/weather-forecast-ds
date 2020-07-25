import React from 'react';
import { DayForecast } from './DayForecast';
import { HourForecast } from './HourForecast';
import { dayDate } from '../../Utilities/heleperFunctions';
import { useLocation } from 'react-router-dom';

export function DayHourForecast(props) {

    const { daily, hourly, city, country, timezone } = props;

    const location = useLocation();

    const { pathname } = location;

    //values and conditions needed if page is reloaded with invalid url:
    const urlCityArray = pathname.match(/.+?(?=_)/);
    //If there is a match, city string exists:
    const urlCity = urlCityArray && 
        urlCityArray[0].slice(1, urlCityArray[0].length);


    const clickedDateArray = pathname.match(/_(.*)/);
    //If there is a match, date exists [2nd in array]:
    const clickedDate = clickedDateArray && clickedDateArray[1];

    //All dates from daily object in one array:
    const allDailyDatesArr = daily.data.map(day =>
        dayDate(day.time, {timeZone: timezone})
    );

    const nopage = <div>no page</div>

    if (!urlCity || !clickedDate) return nopage;

    else if (!allDailyDatesArr.includes(clickedDate) || urlCity !== city) return nopage;
    
    else return (
        <section id='day-hour-forecast'>          
            <DayForecast daily={daily}
                         city={city}
                         country={country}
                         timezone={timezone}
                         clickedDate={clickedDate}
            />
            <HourForecast hourly={hourly}
                          timezone={timezone}
                          clickedDate={clickedDate}
            />           
        </section>
    );
}