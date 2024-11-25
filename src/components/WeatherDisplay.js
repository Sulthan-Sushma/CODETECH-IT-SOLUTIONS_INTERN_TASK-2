// src/components/WeatherDisplay.js
//to display the weather report
import React from "react";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p><span>Temperature:</span> {weather.main.temp}°C</p>
      <p><span>Humidity:</span> {weather.main.humidity}%</p>
      <p><span>Wind Speed:</span> {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
