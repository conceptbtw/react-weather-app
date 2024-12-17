import { useState, useEffect } from "react";
import axios from "axios";

const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    const fetchData = async () => {
      setWeatherLoading(true);
      setWeatherError(null);

      try {
        const response = await axios.get(apiUrl, {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        });

        setWeatherData(response.data);
      } catch (error) {
        setWeatherError(error);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weatherData, weatherError, weatherLoading };
};

export default useWeather;
