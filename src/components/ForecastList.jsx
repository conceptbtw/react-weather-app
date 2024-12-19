import ForecastItem from "./ForecastItem";

const ForecastList = () => {
  return (
    <ul className="w-full flex flex-wrap justify-center items-center gap-1">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </ul>
  );
};

export default ForecastList;
