import React from "react";
import cloudy from "./cloudy.svg";
import ReactAnimatedWeather from "react-animated-weather";

export default function TodayHeadline() {
  return (
    <div className="weather-headline">
      <div className="weather-icon">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="black"
          size={80}
          animate={true}
        />
        <img id="main-icon" alt="weather" src={cloudy} />
      </div>
      <h3 id="weather-description">Broken clouds</h3>
    </div>
  );
}
