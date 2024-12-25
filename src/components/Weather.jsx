import { useState, useEffect } from "react";
import DataList from "./DataList";
import DataItem from "./DataItem";
import useIcon from "../hooks/useIcon";

const Weather = ({ weatherData }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const {
    weather: [{ description }],
    main: { temp, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = weatherData;

  const weatherIcon = useIcon(description);
  const url = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/";

  return (
    <div className="w-full p-4 md:p-5 border border-white/10 rounded-xl bg-white/10 shadow backdrop-blur">
      <div className="text-center">Today, {time}</div>
      <div className="grid md:grid-cols-3 gap-1">
        <div className="center">
          <img
            className="max-w-32 md:max-w-40"
            src={weatherIcon}
            alt={description}
          />
        </div>
        <div className="center gap-1">
          <img
            className="h-6 rounded"
            src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
            alt={country}
          />
          <p className="text-2xl">{name}</p>
        </div>
        <div className="center">
          <DataList>
            <DataItem
              icon={`${url}thermometer-celsius.svg`}
              data={`${Math.round(temp)}°`}
            />
            <DataItem icon={`${url}humidity.svg`} data={`${humidity} %`} />
            <DataItem
              icon={`${url}wind.svg`}
              data={`${Math.round(speed)} m/s`}
            />
          </DataList>
        </div>
      </div>
    </div>
  );
};

export default Weather;
