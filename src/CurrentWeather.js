import React from "react";
import TodayHeadline from "./TodayHeadline";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <TodayHeadline />

      <div className="row current-condition">
        <div className="col-sm-6">
          <div className="clearfix">
            <h2>
              <span className="temp-input" id="current-temp">
                15
              </span>
              &deg;
            </h2>

            <div className="float-left">
              <span className="units">
                <ul className="list-group list-group-horizontal-sm">
                  <li className="list-group-item">
                    <strong>C&deg;</strong>
                  </li>
                  <li className="list-group-item">|</li>
                  <li className="list-group-item">F&deg;</li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <ul className="list-group">
            <li className="list-group-item">
              Real feel : <span id="real-feel-temp">15</span>&deg;
            </li>
            <li className="list-group-item">
              Humidity : <span id="humidity">87</span>%
            </li>
            <li className="list-group-item">
              Wind : <span id="wind-speed">2</span> Km/hr
            </li>
            <li className="list-group-item">
              UV Index : <span id="uv-index">2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
