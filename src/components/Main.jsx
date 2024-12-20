import Weather from "./Weather";
import ForecastList from "./ForecastList";
import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";

const Main = ({ city }) => {
  const { weatherData, weatherError, weatherLoading } = useWeather(city);
  const { forecastData, forecastError, forecastLoading } = useForecast(city);

  if (!weatherData && !forecastData) {
    return <p>!weatherData and !forecastData</p>;
  }

  if (weatherError && forecastError) {
    return <p>weatherError and forecastError</p>;
  }

  if (weatherLoading && forecastLoading) {
    return <p>weatherLoading and forecastLoading</p>;
  }

  return (
    <main className="max-w-3xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-1">
      <Weather weatherData={weatherData} />
      <ForecastList forecastData={forecastData} />
    </main>
  );
};

export default Main;
