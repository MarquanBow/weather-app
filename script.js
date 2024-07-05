// http://api.weatherapi.com/v1/current.json?key=1abd0e7fc7ac45e6ad515636240507&q=Richmond&aqi=no

function getWeather() {
    const apiKey = '4b5dcfeb1e09909278f00d2f7030fc30';
    const city = document.getElementById('city').ariaValueMax;

    if (!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastrUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data: ', error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch(forecastrUrlUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data: ', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
}
