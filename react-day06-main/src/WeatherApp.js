import React, { useState, useEffect, useCallback } from "react";
import WeatherBox from "./WeatherBox";
import WeatherButtonBox from "./WeatherButtonBox";
import "./WeatherApp.css";

const WeatherApp = () => {
  const Api_key = "40dfb5a1dbf7cfab7100e3ad03bee78e";
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const cities = ["Tokyo", "Seoul", "New york", "Paris", "Hanoi"];

  // useEffect hook의 의존성 누락으로 인한 배포 불가 문제
  // 함수의 의존성 누락: getCurrentLocation과 getWeatherByCity 함수가 useEffect 배열로 사용되어야 한다.
  // => useEffect 의존성 배열에 함수를 추가하기 위해서는
  //    useCallback으로 감싸서 컴포넌트가 렌더링될 때마다 동일한 함수 참조를 유지하게 함(무분별한 리렌더링 방지)
  // 결론) useEffect hook의 의존성 배열에는 useCallback으로 감싸진 함수를 추가해야만한다..?
  // => No, useEffect 의존성 배열에는 state, props, 함수 등 여러 값을 넣을 수 있지만,
  //        함수의 경우에는 동일한 참조를 유지하기 위해 자주 useCallback을 사용한다.
  //        동일한 참조를 유지해야만 useEffect가 무분별하게 재실행되는 것을 방지한다.
  //        일단 여기까지 늬앙스만 이해하고 추후 useCallback 숙지한 후 다시 프로젝트 연습할 것.

  const getWeatherByCurrentLocation = useCallback(
    async (lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    },
    [Api_key]
  );

  // useEffect 훅의 의존성 배열에 추가하기 위해 useCallback사용
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, [getWeatherByCurrentLocation]);

  // useEffect 훅의 의존성 배열에 추가하기 위해 useCallback사용
  const getWeatherByCity = useCallback(async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }, [city]);

  useEffect(() => {
    if (city === null || city === "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city, getCurrentLocation, getWeatherByCity]);
  // useEffect 훅의 의존성 배열에 getCurrentLocation, getWeatherByCity 함수 추가

  return (
    <div className="WeatherApp">
      <WeatherBox weather={weather} />
      <WeatherButtonBox cities={cities} setCity={setCity} />
    </div>
  );
};

export default WeatherApp;
