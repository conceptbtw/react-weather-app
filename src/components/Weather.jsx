import DataList from "./DataList";
import DataItem from "./DataItem";

const Weather = () => {
  return (
    <div className="p-4 flex justify-center items-center border rounded">
      <img
        className=""
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        alt=""
      />
      <p className="">Lviv</p>
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
