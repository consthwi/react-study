import React from "react";
import "./WeatherBox.css";

const WeatherBox = ({ weather }) => {
  // console.log(weather);
  return (
    <>
      <div className="WeatherBox">
        {/* <div>{weather && weather.name}</div> */}
        <h2 className="WeatherBox-currentLocation">{weather?.name}</h2>
        <div className="WeatherBox-content">
          <div className="WeatherBox-content-ico"></div>
          <div className="WeatherBox-content-temp">
            <span className="temp-celsius">
              {Math.floor(weather?.main.temp)}°C
            </span>
            /
            <span class="temp-fahrenheit">
              {Math.floor((weather?.main.temp * 9) / 5 + 32)}°F
            </span>
          </div>
        </div>

        <p className="WeatherBox-description">
          {`${weather?.weather[0].description
            .charAt(0)
            .toUpperCase()}${weather?.weather[0].description.slice(1)}`}
        </p>
        <div className="WeatherBox-content2">
          <div className="WeatherBox-content2-row1">
            <div className="temp-high">
              <div className="temp-high-img">
                <p>H: {Math.floor(weather?.main.temp_max)}°</p>
              </div>
            </div>
            <div className="temp-low">
              <div className="temp-low-img">
                <p>L: {Math.floor(weather?.main.temp_min)}°</p>
              </div>
            </div>
          </div>
          <div className="WeatherBox-content2-row2">
            <div className="windy">
              <div className="windy-img">
                <p>{weather?.wind.speed}m/s</p>
              </div>
            </div>
            <div className="humidity">
              <div className="humidity-img">
                <p>{weather?.main.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
