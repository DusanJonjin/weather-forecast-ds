import React from 'react';
import { DayForecast } from './DayForecast';
import { HourForecast } from './HourForecast';

export function DayHourForecast(props) {

    const { chosenDayWeather, city, country, timezone } = props;

    const { hourly, ...day } = chosenDayWeather;

    return (
        <section id='day-hour-forecast'>
            <DayForecast day={day}
                         city={city}
                         country={country}
                         timezone={timezone}
            />
            <HourForecast hourly={hourly}
                          timezone={timezone} />
        </section>
    );
}