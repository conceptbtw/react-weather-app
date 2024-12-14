const Weather = () => {
  return (
    <div className="p-4 flex justify-center items-center border rounded">
      <img
        className=""
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        alt=""
      />
      <p className="">Lviv</p>
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
    </div>
  );
};

export default Weather;
