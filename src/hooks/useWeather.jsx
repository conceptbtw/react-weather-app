import { useState, useEffect } from "react";

const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState();
  const [weatherError, setWeatherError] = useState();
  const [weatherLoading, setWeatherLoading] = useState();

  const apiKey = "";
  const apiUrl = "";

  useEffect(() => {}, [city]);
};

export default useWeather;
