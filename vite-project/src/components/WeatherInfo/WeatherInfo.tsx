import React from 'react';

interface WeatherInfoProps {
  weather: any; // Replace `any` with a more specific type if available, e.g., OpenWeatherMap response type
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
  // Function to convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(2);

  return (
    <div>
      <h2>Weather Info</h2>
      <p>City: {weather.name}</p>
      {/* Convert the temperature from Kelvin to Celsius */}
      <p>Temperature: {kelvinToCelsius(weather.main.temp)}°C</p>
      <p>Feels Like: {kelvinToCelsius(weather.main.feels_like)}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
