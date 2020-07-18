import React from 'react';
import { DayForecast } from './DayForecast';
import { HourForecast } from './HourForecast';

export function DayHourForecast(props) {

    return (
        <section id='day-hour-forecast'>
            <DayForecast />
            <HourForecast />
        </section>
    );
}