import React from 'react';

export function DayDate({ dayDate, date='' }) {

    return (
        <h2 id='day-date'>
            {dayDate}<br />
            {date}
        </h2>
    )
}