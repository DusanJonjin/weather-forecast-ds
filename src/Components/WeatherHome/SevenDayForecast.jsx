import React from 'react';
import { OneDayCard } from './OneDayCard';

export function SevenDayForecast(props) {

    return (
        <div>
            <h3>
                7-day forecast
            </h3>
            <ul>
                <li><OneDayCard /></li>
            </ul>
        </div>
    );
}