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
  });

  const date = new Date(dt * 1000).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });

  const forecastIcon = useIcon(description);
  const url = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/";

  return (
    <li className="p-4 md:p-5 center flex-1 flex-col border border-white/10 rounded-xl bg-white/10 shadow backdrop-blur">
      <p className="">{day}</p>
      <p className="text-white/50">{date}</p>
      <img
        className="max-w-32 md:max-w-40"
        src={forecastIcon}
        alt={description}
      />
      <DataList>
        <DataItem
          icon={`${url}thermometer-celsius.svg`}
          data={`${Math.round(max)}°/${Math.round(min)}°`}
        />
        <DataItem icon={`${url}humidity.svg`} data={`${humidity} %`} />
        <DataItem icon={`${url}wind.svg`} data={`${Math.round(speed)} m/s`} />
      </DataList>
    </li>
  );
};

export default ForecastItem;
