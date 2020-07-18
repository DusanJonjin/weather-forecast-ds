import React from 'react';

export function PresHumidWind({ pressure, humidity, windSpeed }) {

    return (
        <div id='pres-humid-wind'>
            <p>Pressure: {pressure + ' mb'}</p>
            <p>Humidity: {(humidity * 100).toFixed() + '%' }</p>
            <p>Wind speed: {windSpeed + ' km/h'}</p>
        </div>
    );
}