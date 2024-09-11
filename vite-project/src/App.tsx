import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherInfo from './components/WeatherInfo/WeatherInfo'; // Import the WeatherInfo component

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null); // Replace `any` with a specific type if known
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f33b4e0f3f63f5a8742d7d6d7c20b01`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);  // Update the weather state
      console.log(data);  // Log the fetched weather data, not the state
    } catch (err: any) {  // Make sure `err` has `message` property
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}  {/* Display error if it exists */}
      {/* {weather && <WeatherInfo weather={weather} />}  Display weather info when available */}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default App;
