import React, { useState } from "react";
import Description from "./components/Description";
import Temperature from "./components/Temp";
import Location from "./components/Location";
import FeelsLike from "./components/FellsLike";
import Humidity from "./components/Humidity";
import Wind from "./components/Wind";
import fetchWeatherData from "./utils/Api";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const weatherData = await fetchWeatherData(location);
        if (weatherData.cod === "404") {
          // City not found
          throw new Error("City not found");
        } else {
          setData(weatherData);
          setError("");
          setWeatherDescription(weatherData.weather[0].description);
        }
      } catch (error) {
        console.error("Error searching location:", error);
        setError("City not found or an error occurred.");
      }

      setLocation("");
    }
  };

  const getWeatherClass = () => {
    if (weatherDescription.includes("sunny")) {
      return "sunshine";
    } else if (weatherDescription.includes("clouds")) {
      return "clouds";
    } else if (weatherDescription.includes("rain")) {
      return "rain";
    } else if (weatherDescription.includes("clear")) {
      return "clear";
    } else if (weatherDescription.includes("haze")) {
      return "haze";
    } else if (weatherDescription.includes("fog")) {
      return "fog";
    } else if (weatherDescription.includes("mist")) {
      return "mist";
    } else if (weatherDescription.includes("drizzle")) {
      return "drizzle";
    } else if (weatherDescription.includes("snow")) {
      return "snow";
    } else {
      return "";
    }
  };

  return (
    <div className={`page ${getWeatherClass()}`}>
      <div className="header">
        <h1>Sunshine Stats Weather</h1>
      </div>
      <div className="search">
        <input
          className="search_input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <Location name={data.name} />
          <Temperature temperature={data.main?.temp} />
          <Description weather={data.weather} />
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <FeelsLike feelsLike={data.main?.feels_like} />
            <Humidity humidity={data.main?.humidity} />
            <Wind speed={data.wind?.speed} />
          </div>
        )}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
