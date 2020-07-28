export const getWeather = async (searchValue, badUrl, badUrlSearch, networkError) => {
    if(!searchValue) return badUrl;
    try {
        const apiGeo = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.positionstack.com/v1/forward?access_key=b1fd85dac9a0d459ea8e344eb0e2303f&limit=1&query=${searchValue}`
        );
        const apiGeoResult = await apiGeo.json();
        if (!apiGeoResult.data) return badUrlSearch;
        const geoData = apiGeoResult.data[0];
        if (!geoData) return badUrlSearch;
        const { latitude, longitude, name, country } = geoData;
    
        const apiWeather = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5e6a1cf83ac22f224520336d0e011527/${latitude + ',' + longitude}?exclude=flags,alerts,minutely&&units=ca&&extend=hourly`
        );
        const apiWeatherResult = await apiWeather.json();
        apiWeatherResult.city = name;
        apiWeatherResult.country = country;
        return apiWeatherResult;  
    }
    catch (err) {return networkError}
  }
  