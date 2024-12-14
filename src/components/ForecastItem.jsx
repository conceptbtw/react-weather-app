const ForecastItem = () => {
  return (
    <li className="p-4 flex flex-col justify-center items-center border rounded">
      <p className="">Monday</p>
      <img
        className=""
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        alt=""
      />
      <ul className="">
        <li className="flex justify-center items-center">
          <img
            className=""
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg"
            alt=""
          />
          <p className="">20°/10°</p>
        </li>
        <li className="flex justify-center items-center">
          <img
            className=""
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
            alt=""
          />
          <p className="">50 %</p>
        </li>
        <li className="flex justify-center items-center">
          <img
            className=""
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"
            alt=""
          />
          <p className="">5 m/s</p>
        </li>
      </ul>
    </li>
  );
};

export default ForecastItem;
