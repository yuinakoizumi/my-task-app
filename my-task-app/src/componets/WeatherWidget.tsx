import { useEffect, useState } from "react";
import axios from "axios";

export const WeatherWidget = () => {
  const [weather, setWeather] = useState<{ temp: number; desc: string } | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      );
      setWeather({ temp: data.main.temp, desc: data.weather[0].description });
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {weather ? (
        <p>今日の天気: {weather.desc} ({weather.temp}℃)</p>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
};
