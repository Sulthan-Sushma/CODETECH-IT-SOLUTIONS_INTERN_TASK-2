// Weather APP...
import React, { useState } from "react";
import './App.css';
import WeatherSearch from './components/WeatherSearch'; 

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b1fb2b9da365dd413c834b6c4f8e790b`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather({
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      });
    } catch (err) {
      setError("Unable to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  const getBackgroundImage = () => {
    if (weather?.condition === "Clear") return "url('/images/sunny.jpg')";
    if (weather?.condition === "Clouds") return "url('/images/cloudy.jpg')";
    return "url('/images/default.jpg')";
  };

  return (
    <div className="app-container" style={{ backgroundImage: getBackgroundImage() }}>
      <div className="dynamic-background"></div>
      <h1>Weather App</h1>
      <WeatherSearch onSearch={fetchWeather} />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      {weather && (
        <>
          <div className="location-info">{weather.city}</div>
          <div className="temperature-display">{weather.temperature}°F</div>
          <div className="temperature-description">{weather.condition}</div>
          <div className="sunrise-sunset">
            <div>
              <span>Sunrise</span>
              <p>{weather.sunrise}</p>
            </div>
            <div>
              <span>Sunset</span>
              <p>{weather.sunset}</p>
            </div>
          </div>
        </>
      )}
      <div className="bottom-gradient"></div>
    </div>
  );
};

export default App;
