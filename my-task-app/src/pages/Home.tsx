import { useWeather } from "../hooks/useWeather";

export const Home = () => {
  const city = "Malaysia";
  const { weather, loading, error } = useWeather(city);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weather) return null;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Today's Weather in {weather.name}</h1>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
    </div>
  );
};
