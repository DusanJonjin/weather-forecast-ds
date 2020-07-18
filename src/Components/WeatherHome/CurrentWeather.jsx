import React from 'react';
import { City, Day, Image, PresHumidWind } from '../- Joint Components -/jointExport';

export function CurrentWeather(props) {

    return (
        <div id='current-weather'>
            <City />
            <Day />
            <Image />
            <p>temperature now C</p>
            <PresHumidWind />
        </div>
    );
}