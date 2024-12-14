import Weather from "./Weather";
import ForecastList from "./ForecastList";

const Main = () => {
  return (
    <main className="max-w-3xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-1">
      <Weather />
      <ForecastList />
    </main>
  );
};

export default Main;
