import React from 'react';
import { Image } from '../- Joint Components -/Image';

export function HourForecast(props) {

    return (
        <div id='hour-forecast'>
            <h3>Hourly forecast</h3>
            <table>
                <tbody>
                    <tr>
                        <td>hour</td>
                    </tr>
                    <tr>
                        <td><Image /></td>
                    </tr>
                    <tr>
                        <td>temperature</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}