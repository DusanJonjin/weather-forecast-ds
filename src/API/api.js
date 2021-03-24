export const getWeather = async (searchValue, badUrl, badUrlSearch, networkError) => {
    if(!searchValue) return badUrl;
    try {
        const apiGeo = await fetch(
        `http://api.positionstack.com/v1/forward?access_key=12363d9cedc01626f2df5f58c31f2a9d&limit=1&query=${searchValue}`
        );
        const apiGeoResult = await apiGeo.json();
        if (!apiGeoResult.data) return badUrlSearch;
        const geoData = apiGeoResult.data[0];
        if (!geoData) return badUrlSearch;
        const { latitude, longitude, name, country } = geoData;
        if (!latitude || !longitude) return networkError;
    
        const apiWeather = await fetch(
        `https://api.darksky.net/forecast/5e6a1cf83ac22f224520336d0e011527/${latitude + ',' + longitude}?exclude=flags,alerts,minutely&&units=ca&&extend=hourly`
        );
        const apiWeatherResult = await apiWeather.json();
        apiWeatherResult.city = name;
        apiWeatherResult.country = country;
        return apiWeatherResult;  
    }
    catch (err) {return networkError}
  }
  