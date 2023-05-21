import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/@globals.sass";
import { BrowserRouter } from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <YMaps
        query={{
          apikey: "f546cab1-1f4a-4f9d-bf0f-22100e02ce30",
          lang: "ru_RU",
          load: "package.full",
        }}
      >
        <App />
      </YMaps>
    </BrowserRouter>
  </React.StrictMode>
);
