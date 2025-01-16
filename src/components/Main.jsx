import Weather from "./Weather";
import ForecastList from "./ForecastList";
import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";

const Main = ({ city }) => {
  const { weatherData, weatherError, weatherLoading } = useWeather(city);
  const { forecastData, forecastError, forecastLoading } = useForecast(city);

  const mainStyles = "max-w-screen-lg w-full p-4 md:p-5 center flex-1";

  if (weatherLoading || forecastLoading) {
    return (
      <main className={mainStyles}>
        <img className="size-32 md:size-40" src="/loading.svg" alt="Loading" />
      </main>
    );
  }

  if (weatherError || forecastError || !weatherData || !forecastData) {
    return (
      <main className={mainStyles}>
        <div className="p-8 md:p-10 border border-red-500/50 rounded-xl bg-red-500/50 shadow backdrop-blur">
          <p className="text-2xl">City not found</p>
          <p className="text-white/50">Please try again</p>
        </div>
      </main>
    );
  }

  return (
    <main className={mainStyles}>
      <div className="center flex-col gap-1">
        <Weather weatherData={weatherData} />
        <ForecastList forecastData={forecastData} />
      </div>
    </main>
  );
};

export default Main;
