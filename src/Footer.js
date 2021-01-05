import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="text-center" >
        <a
          href="https://github.com/rannymonita/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Open-source code</strong>
        </a>{" "}
        by Ranny Monita
      </p>
    </div>
  );
}
