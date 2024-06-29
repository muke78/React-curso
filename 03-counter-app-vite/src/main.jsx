import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./index";
import './style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
  </React.StrictMode>
);
