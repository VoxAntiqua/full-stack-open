import { useEffect } from "react";
import weatherService from "../services/weather";
import { useState } from "react";

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    weatherService
      .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
      .then((response) => setWeatherData(response));
  }, [country]);
  if (weatherData) {
    return (
      <>
        <h2>Weather in {country.capital[0]}</h2>
        <div>
          temperature {(weatherData.main.temp - 273).toFixed(1)} degrees Celsius
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        />
        <div>wind {weatherData.wind.speed} m/s</div>
      </>
    );
  }
};

export default Weather;
