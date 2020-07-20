import React from 'react';

export function Day({ day, date='' }) {

    return (
        <h2>
            {day}<br />
            {date}
        </h2>
    )
}