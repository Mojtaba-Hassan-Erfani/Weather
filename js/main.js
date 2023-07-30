import { getWeatherByCoordinates } from './weather-api.js';

// Set default city to graz.
let city = 'graz';

const currentTmp = document.querySelector('.current-tmp');
const tempMin = document.querySelector('.tmp-min');
const tempMax = document.querySelector('.tmp-max');

// Fetch and display the weather for a city.
const fetchWeatherForCity = async cityName => {
	try {
		const response = await fetch('data/cities.json');
		const data = await response.json();

		const getCityData = data.cities.find(
			element => element['city'] === cityName
		);

		const weatherData = await getWeatherByCoordinates(
			getCityData.lat,
			getCityData.lon
		);

		currentTmp.innerHTML = weatherData.main.temp.toFixed() + '°';
		tempMin.innerHTML = weatherData.main.temp_min.toFixed() + '°';
		tempMax.innerHTML = weatherData.main.temp_max.toFixed() + '°';
	} catch (error) {
		console.log('Failed to fetch the Weather data', error);
	}
};

// First API Call for default city.
fetchWeatherForCity(city);

// Get selected city.
let selectedCity = document.querySelector('.cities');

// Set an event for city, if it gets update by the user then make again an API Call.
selectedCity.addEventListener('change', event => {
	city = event.target.value;
	fetchWeatherForCity(city);
});
