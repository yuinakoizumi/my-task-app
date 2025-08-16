export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch weather: ${response.status}`);
  }

  const data: WeatherData = await response.json(); // 型を明示
  return data;
};
