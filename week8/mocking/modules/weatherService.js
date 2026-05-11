const fetchWeatherAPI = require('../utils/fetchWeatherAPI');

const getWeather = (city) => {
 return fetchWeatherAPI(city);
};

module.exports = { getWeather };