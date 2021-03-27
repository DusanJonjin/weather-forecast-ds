export const getWeather = async (searchValue, badUrl, badUrlSearch, networkError) => {
    if(!searchValue) return badUrl;
    try {
        const apiGeo = await fetch(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_GEODATA_KEY}&q=${searchValue}&format=json&limit=1`
        );
        const apiGeoResult = await apiGeo.json();
        const geoData = apiGeoResult[0];
        if (apiGeoResult.error || !geoData) return badUrlSearch;
        const { lat, lon, display_name } = geoData;
        if (!lat || !lon) return networkError;
        const displayNameInArr = display_name.split(',');
        const city = displayNameInArr[0];
        const country = displayNameInArr[displayNameInArr.length - 1];
        const place = {city, country}
    
        const apiWeather = await fetch(
        `https://serene-basin-16003.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/${lat + ',' + lon}?exclude=flags,alerts,minutely&&units=ca&&extend=hourly`
        );
        const apiWeatherResult = await apiWeather.json();
        const weatherWithPlace = {...apiWeatherResult, ...place}
        
        return weatherWithPlace;  
    }
    catch (err) {return networkError}
  }
  