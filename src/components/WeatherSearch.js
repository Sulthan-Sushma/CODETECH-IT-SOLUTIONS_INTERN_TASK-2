//to search the weather to find at state,country and etc........
import React, { useState } from "react";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }
    setError(""); // Reset error
    onSearch(city);
    setCity(""); // Clear input
  };

  return (
    <form className="weather-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default WeatherSearch;
