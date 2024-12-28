import Weather from "./Weather";
import ForecastList from "./ForecastList";
import Error from "./Error";
import Loading from "./Loading";
import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";

const Main = ({ city }) => {
  const { weatherData, weatherError, weatherLoading } = useWeather(city);
  const { forecastData, forecastError, forecastLoading } = useForecast(city);

  let content;

  if (weatherData && forecastData) {
    content = (
      <>
        <Weather weatherData={weatherData} />
        <ForecastList forecastData={forecastData} />
      </>
    );
  }

  if (weatherError || forecastError || !weatherData || !forecastData) {
    content = <Error />;
  }

  if (weatherLoading || forecastLoading) {
    content = <Loading />;
  }

  return (
    <main className="max-w-3xl w-full p-4 md:p-5 center flex-1 flex-col gap-1">
      {content}
    </main>
  );
};

export default Main;
