import DataList from "./DataList";
import DataItem from "./DataItem";
import useIcon from "../hooks/useIcon";

const ForecastItem = ({ forecastData }) => {
  const {
    dt,
    temp: { min, max },
    humidity,
    weather: [{ description }],
    speed,
  } = forecastData;

  const day = new Date(dt * 1000).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  });

  const forecastIcon = useIcon(description);

  return (
    <li className="p-4 flex flex-1 flex-col justify-center items-center border rounded">
      <p className="">{day}</p>
      <img className="max-w-32" src={forecastIcon} alt={description} />
      <DataList>
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg"
          data={`${Math.round(max)}°/${Math.round(min)}°`}
        />
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
          data={`${humidity} %`}
        />
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"
          data={`${Math.round(speed)} m/s`}
        />
      </DataList>
    </li>
  );
};

export default ForecastItem;
