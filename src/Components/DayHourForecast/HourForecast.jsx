import React from 'react';
import { Image } from '../- Joint Components -/Image';

export function HourForecast({ hourly, timezone }) {

    /* With this function we return hours of a day (converted to
    2-digit hours from miliseconds),based on parameter. We need to
    use regEx to get the wanted value (dateHour string is full date
    and hour separated by coma): */
    const getHours = hour => {
        const dateHour = new Date(hour.time * 1000).toLocaleDateString(
            'en', {hour:'2-digit', hour12: false, timeZone: timezone}
        );
        const justHour = dateHour.match((/, (.*)/))[1];
        if (hour === '24') return '00';
        return justHour;
    };

    /* Then, we use this function to filter out hourly array
    (only PAIR hours of a day (24h) will be shown): */
    const filterPairHours = h_ly => (
        h_ly.filter(h => !(getHours(h) % 2))
    );

    const hoursTableData = filterPairHours(hourly).map(hour => 
        <td key={hour.time}>
                {getHours(hour) + 'h'}
        </td>
    );

    const imageTableData = filterPairHours(hourly).map(hour =>
        <td key={hour.time}>
            <Image imgSrc={require(`../../Images/${hour.icon}.png`)}
                   imgAlt={hour.icon} 
            />
        </td>
    );

    const tempTableData = filterPairHours(hourly).map(hour => 
        <td key={hour.time}>
            {hour.temperature.toFixed(1) + '°C'}
        </td>
    );

    return (
        <div id='hour-forecast'>
            <h3>Hourly forecast</h3>
            <table>
                <tbody>
                    <tr>
                        {hoursTableData}
                    </tr>
                    <tr>
                        {imageTableData}
                    </tr>
                    <tr>
                        {tempTableData}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}