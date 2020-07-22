import React from 'react';

export function CityCountry ({ city, country='' }) {

    return (
        <h1>
            {city}{country && `, ${country}`}
        </h1>
    );
}