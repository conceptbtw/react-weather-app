import { useState, useEffect } from "react";
import axios from "axios";

const useForecast = (city) => {
  const [forecastData, setForecastData] = useState(null);
  const [forecastError, setForecastError] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(false);

  const apiKey = import.meta.env.VITE_FORECAST_API_KEY;
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/daily";

  useEffect(() => {
    const fetchData = async () => {
      setForecastLoading(true);
      setForecastError(null);

      try {
        const response = await axios.get(apiUrl, {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        });

        setForecastData(response.data);
      } catch (error) {
        setForecastError(error);
      } finally {
        setForecastLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { forecastData, forecastError, forecastLoading };
};

export default useForecast;
