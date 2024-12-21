import DataList from "./DataList";
import DataItem from "./DataItem";
import useIcon from "../hooks/useIcon";

const Weather = ({ weatherData }) => {
  const {
    weather: [{ description }],
    main: { temp, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = weatherData;

  const weatherIcon = useIcon(description);

  return (
    <div className="w-full p-4 flex justify-between items-center border rounded">
      <div className="flex flex-1 justify-center items-center">
        <img className="max-w-32" src={weatherIcon} alt={description} />
      </div>
      <div className="flex flex-1 justify-center items-center gap-1">
        <img
          className="rounded"
          src={`https://flagcdn.com/h20/${country.toLowerCase()}.png`}
          alt={country}
        />
        <p className="">{name}</p>
      </div>
      <DataList>
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg"
          data={`${Math.round(temp)}°`}
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
    </div>
  );
};

export default Weather;
