import React from 'react';
import { Day, Image, TempLowHigh } from '../- Joint Components -/jointExport';

export function OneDayCard(props) {

    const { clickOneDay,
            day,
            date,
            imgSrc, 
            imgAlt, 
            tempLow,
            tempHigh } = props;

        return (
            <div onClick={clickOneDay}
                 className='one-day-card'>
                <Day day={day}
                     date={date} />
                <Image imgSrc={imgSrc}
                       imgAlt={imgAlt} />
                <TempLowHigh tempLow={tempLow}
                             tempHigh={tempHigh} />
            </div>
        );
}
    