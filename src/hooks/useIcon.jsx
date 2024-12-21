const useIcon = (description) => {
  const url = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/";

  switch (description.toLowerCase()) {
    case "clear sky":
      return `${url}clear-day.svg`;

    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
      return `${url}cloudy.svg`;

    case "overcast clouds":
      return `${url}overcast.svg`;

    case "light intensity drizzle":
    case "drizzle":
    case "heavy intensity drizzle":
    case "light intensity drizzle rain":
    case "drizzle rain":
    case "heavy intensity drizzle rain":
    case "shower rain and drizzle":
    case "heavy shower rain and drizzle":
    case "shower drizzle":
      return `${url}overcast-drizzle.svg`;

    case "light rain":
    case "moderate rain":
    case "heavy intensity rain":
    case "very heavy rain":
    case "extreme rain":
    case "light intensity shower rain":
    case "shower rain":
    case "heavy intensity shower rain":
    case "ragged shower rain":
      return `${url}overcast-rain.svg`;

    case "light thunderstorm":
    case "thunderstorm":
    case "heavy thunderstorm":
    case "ragged thunderstorm":
      return `${url}thunderstorms-overcast.svg`;

    case "thunderstorm with light drizzle":
    case "thunderstorm with drizzle":
    case "thunderstorm with heavy drizzle":
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with heavy rain":
      return `${url}thunderstorms-overcast-rain.svg`;

    case "freezing rain":
    case "sleet":
    case "light shower sleet":
    case "shower sleet":
    case "light rain and snow":
    case "rain and snow":
      return `${url}overcast-sleet.svg`;

    case "light snow":
    case "snow":
    case "heavy snow":
    case "light shower snow":
    case "shower snow":
    case "heavy shower snow":
      return `${url}overcast-snow.svg`;

    case "hail":
      return `${url}overcast-hail.svg`;

    case "mist":
      return `${url}mist.svg`;

    case "smoke":
      return `${url}overcast-smoke.svg`;

    case "haze":
      return `${url}overcast-haze.svg`;

    case "fog":
      return `${url}overcast-fog.svg`;

    case "squalls":
    case "windy":
      return `${url}wind.svg`;

    case "tornado":
      return `${url}tornado.svg`;

    case "tropical storm":
    case "hurricane":
      return `${url}hurricane.svg`;

    case "sand":
    case "dust":
    case "volcanic ash":
      return `${url}dust.svg`;

    case "sand/ dust whirls":
      return `${url}dust-wind.svg`;

    case "cold":
      return `${url}snowflake.svg`;

    case "hot":
      return `${url}sun-hot.svg`;

    default:
      return `${url}not-available.svg`;
  }
};

export default useIcon;
