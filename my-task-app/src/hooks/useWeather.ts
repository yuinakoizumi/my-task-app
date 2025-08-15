import { useState, useEffect } from "react";
import type { WeatherData } from "../types/weather";
import { fetchWeather } from "../services/weatherService";

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchWeather(city)
      .then(setWeather)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [city]);

  return { weather, loading, error };
};
