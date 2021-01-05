import React from "react";
import cloudy from "./cloudy.svg";

export default function DailyForecast() {
  return (
    <span className="daily-forecast">
      <ul className="list-group">
        <li className="list-group-item day">hour</li>
        <li className="list-group-item icon">
          <img id="main-icon" alt="weather" src={cloudy} />
        </li>
        <li className="list-group-item max-temp">16&deg;</li>
        <li className="list-group-item min-temp">13&deg;</li>
      </ul>
    </span>
  );
}
