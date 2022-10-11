import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Offers from "./pages/Offers/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Offers />
  </React.StrictMode>
);
