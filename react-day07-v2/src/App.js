import { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButtonBox from "./component/WeatherButtonBox";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const cities = ["Seoul", "Tokyo", "Paris", "Hanoi", "New York"];
  const [city, setCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [apiError, setApiError] = useState("");

  const Api_key = "40dfb5a1dbf7cfab7100e3ad03bee78e";

  const getWeatherByCurrentLocation = useCallback(async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Api_key}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setApiError(error.message);
      setLoading(false);
    }
  }, []);

  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, [getWeatherByCurrentLocation]);

  const getWeatherByCity = useCallback(async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setApiError(error.message);
      setLoading(false);
    }
  }, [city]);

  const handleChangeCity = (selectedCity) => {
    if (selectedCity === "current") {
      setCity(null);
      getCurrentLocation();
    } else {
      setCity(selectedCity);
    }
    setSelectedCity(selectedCity);
  };

  useEffect(() => {
    if (city === null || city === "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city, getCurrentLocation, getWeatherByCity]);

  let weatherText = weather?.weather[0].main.toLowerCase();

  return (
    <div className={`WeatherApp ${weatherText}`}>
      {loading ? (
        <div>
          <ClipLoader color="#fdbb2d" loading={loading} size={150} />
        </div>
      ) : !apiError ? (
        <div className="WeatherApp-wrapper">
          <WeatherBox weather={weather} />
          <WeatherButtonBox
            cities={cities}
            handleChangeCity={handleChangeCity}
            selectedCity={selectedCity}
          />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;
