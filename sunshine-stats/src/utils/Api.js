import axios from "axios";

const API_KEY = "1c43a476ca6541b71f07d235ec7cdb00";

const fetchWeatherData = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default fetchWeatherData;
