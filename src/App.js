import React from "react";
import logo from "./logo.svg";
import Form from "./Form";
import CurrentDate from "./CurrentDate";
import City from "./City";
import CurrentWeather from "./CurrentWeather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container-sm">
        <Form />
        <CurrentDate />
        <City />
        <CurrentWeather />
      </header>
    </div>
  );
}

export default App;
