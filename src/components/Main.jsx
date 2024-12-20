import Weather from "./Weather";
import ForecastList from "./ForecastList";
import useWeather from "../hooks/useWeather";

const Main = ({ city }) => {
  const { weatherData, weatherError, weatherLoading } = useWeather(city);

  if (!weatherData) {
    return <p>!weatherData</p>;
  }

  if (weatherError) {
    return <p>weatherError</p>;
  }

  if (weatherLoading) {
    return <p>weatherLoading</p>;
  }

  return (
    <main className="max-w-3xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-1">
      <Weather weatherData={weatherData} />
      <ForecastList />
    </main>
  );
};

export default Main;
