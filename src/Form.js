import React from "react";

export default function form() {
  return (
    <div className="Form">
      <form id="city-name">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter a city here"
            className="form-control search-box"
            id="user-city-input"
          />
        </div>
      </form>
    </div>
  );
}
