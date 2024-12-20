import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecastData }) => {
  return (
    <ul className="w-full flex flex-wrap justify-center items-center gap-1">
      {forecastData?.list?.map((forecastData, index) => (
        <ForecastItem key={index} forecastData={forecastData} />
      ))}
    </ul>
  );
};

export default ForecastList;
