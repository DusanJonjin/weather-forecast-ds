import React from 'react';

export function DayDate({ dayDate, date='' }) {

    return (
        <h2>
            {dayDate}<br />
            {date}
        </h2>
    )
}