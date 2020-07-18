import React from 'react';
import { City, Day, Image, TempLowHigh, PresHumidWind } from '../- Joint Components -/jointExport';

export function DayForecast(props) {

    return (
        <div id='day-forecast'>
            <City />
            <Day />
            <p>Summary</p>
            <Image />
            <TempLowHigh />
            <PresHumidWind />
        </div>
    );
}