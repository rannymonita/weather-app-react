import React from "react";
import cloudy from "./cloudy.svg";

export default function TodayHeadline() {
  return (
    <div className="weather-headline">
      <div className="weather-icon">
        <img id="main-icon" alt="weather" src="./cloudy.svg" />
      </div>
      <h3 id="weather-description">Broken clouds</h3>
    </div>
  );
}
