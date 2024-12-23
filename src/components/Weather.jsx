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
    <div className="w-full p-4 md:p-5 grid md:grid-cols-3 border border-white/10 rounded-xl bg-white/10 shadow backdrop-blur">
      <div className="flex justify-center items-center">
        <img
          className="max-w-32 md:max-w-40"
          src={weatherIcon}
          alt={description}
        />
      </div>
      <div className="flex justify-center items-center gap-1">
        <img
          className="rounded"
          src={`https://flagcdn.com/h20/${country.toLowerCase()}.png`}
          alt={country}
        />
        <p className="">{name}</p>
      </div>
      <div className="flex justify-center items-center">
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
    </div>
  );
};

export default Weather;
