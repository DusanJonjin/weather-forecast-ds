import { City } from './City';
import { Day } from './Day';
import { Image } from './Image';
import { PresHumidWind } from './PresHumidWind';
import { TempLowHigh } from './TempLowHigh';

/* We import all of the joint components in this file, so that we can
export them later in parent components together as needed. We do this
to avoid too much boilerplate code in our parent components, 
by importing them one by one. */

export { City, Day, Image, PresHumidWind, TempLowHigh };