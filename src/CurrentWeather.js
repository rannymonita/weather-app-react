import React from "react";
import TodayHeadline from "./TodayHeadline";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <TodayHeadline />

      <div class="row current-condition">
        <div class="col-sm-6">
          <div class="clearfix">
            <h2>
              <span class="temp-input" id="current-temp">
                15
              </span>
              &deg;
            </h2>

            <div class="float-left">
              <span class="units">
                <ul class="list-group list-group-horizontal-sm">
                  <li class="list-group-item">
                    <strong>C&deg;</strong>
                  </li>
                  <li class="list-group-item">|</li>
                  <li class="list-group-item">F&deg;</li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <ul class="list-group">
            <li class="list-group-item">
              Real feel : <span id="real-feel-temp">15</span>&deg;
            </li>
            <li class="list-group-item">
              Humidity : <span id="humidity">87</span> %
            </li>
            <li class="list-group-item">
              Wind : <span id="wind-speed">2</span> Km/hr
            </li>
            <li class="list-group-item">
              UV Index : <span id="uv-index">2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
