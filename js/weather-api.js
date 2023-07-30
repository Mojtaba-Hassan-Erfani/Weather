export const getWeatherByCoordinates = async ( lat, lon  ) => {
    const apiKey = Here_will_come_your_OpenWeather_API_KEY;

    const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric` );
    const data = await response.json();

    return data;
}
