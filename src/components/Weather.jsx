import DataList from "./DataList";
import DataItem from "./DataItem";

const Weather = () => {
  return (
    <div className="w-full p-4 flex justify-between items-center border rounded">
      <div className="flex flex-1 justify-center items-center">
        <img
          className="max-w-32"
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-center items-center gap-1">
        <img
          className="rounded"
          src="https://flagcdn.com/h20/ua.png"
          alt="Flag"
        />
        <p className="">Lviv</p>
      </div>
      <DataList>
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg"
          data="10°"
        />
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
          data="50 %"
        />
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"
          data="5 m/s"
        />
      </DataList>
    </div>
  );
};

export default Weather;
