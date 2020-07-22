import React from 'react';

export function CityCountry ({ city, country='' }) {

    return (
        <h1 id='city-country'>
            {city}{country && `, ${country}`}
        </h1>
    );
}