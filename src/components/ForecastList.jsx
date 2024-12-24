import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecastData }) => {
  return (
    <ul className="w-full center flex-1 flex-wrap gap-1">
      {forecastData?.list?.map((forecastData, index) => (
        <ForecastItem key={index} forecastData={forecastData} />
      ))}
    </ul>
  );
};

export default ForecastList;
