import React from "react";
import Form from "./Form";
import CurrentDate from "./CurrentDate";
import City from "./City";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container-sm">
        <Form />
        <CurrentDate />
        <City />
        <CurrentWeather />
        <Forecast />
      </header>
      <Footer />
    </div>
  );
}

export default App;
