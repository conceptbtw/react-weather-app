import Weather from "./Weather";
import ForecastList from "./ForecastList";
import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";

const Main = ({ city }) => {
  const { weatherData, weatherError, weatherLoading } = useWeather(city);
  const { forecastData, forecastError, forecastLoading } = useForecast(city);

  return (
    <main className="max-w-3xl w-full p-4 md:p-5 center flex-1 flex-col gap-1">
      {!weatherData && !forecastData && <p>!weatherData and !forecastData</p>}
      {weatherError && forecastError && <p>weatherError and forecastError</p>}
      {weatherLoading && forecastLoading && (
        <p>weatherLoading and forecastLoading</p>
      )}
      {weatherData && <Weather weatherData={weatherData} />}
      {forecastData && <ForecastList forecastData={forecastData} />}
    </main>
  );
};

export default Main;
