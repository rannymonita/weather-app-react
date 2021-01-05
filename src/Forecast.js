import React from "react";
import DailyForecast from "./DailyForecast";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card card-style text-center">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link btn-block text-center collapsed data-title text-nowrap active"
              type="button"
              data-bs-toggle="collapse"
              href="#collapseTwo"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Next hours
            </button>
          </h2>
        </div>

        <div
          id="collapseTwo"
          className="collapse show forecast"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <div id="forecast-hourly">
              <DailyForecast />
              <DailyForecast />
              <DailyForecast />
              <DailyForecast />
              <DailyForecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
