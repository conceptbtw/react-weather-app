import { useState, useEffect } from "react";

const useForecast = (city) => {
  const [forecastData, setForecastData] = useState();
  const [forecastError, setForecastError] = useState();
  const [forecastLoading, setForecastLoading] = useState();

  const apiKey = "";
  const apiUrl = "";

  useEffect(() => {}, [city]);
};

export default useForecast;
