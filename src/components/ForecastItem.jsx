import DataList from "./DataList";
import DataItem from "./DataItem";

const ForecastItem = () => {
  return (
    <li className="p-4 flex flex-col justify-center items-center border rounded">
      <p className="">Monday</p>
      <img
        className=""
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        alt=""
      />
      <DataList>
        <DataItem
          icon="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg"
          data="20°/10°"
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
    </li>
  );
};

export default ForecastItem;
