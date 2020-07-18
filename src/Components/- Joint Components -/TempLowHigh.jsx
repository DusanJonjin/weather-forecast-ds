import React from 'react';

export function TempLowHigh({ tempLow, tempHigh }) {
    return(
        <div className='temp-lowhigh'>
            <p id='low'>{tempLow}</p>
            <p id='high'>{tempHigh}</p>
        </div>
    );
}