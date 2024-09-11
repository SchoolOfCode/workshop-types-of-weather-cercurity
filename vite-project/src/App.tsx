// import { useState } from 'react'


// import './App.css'
// import SearchBar from './components/SearchBar/SearchBar'

// function App() {
  

//   return (
//       <SearchBar />
//   )
// }

// export default App




import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
// import WeatherInfo from './components/WeatherInfo/WeatherInfo'


const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null); // Replace `any` with a more specific type if available
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
      setWeather(data);
       console.log (weather)
    } catch (err) {
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
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default App


