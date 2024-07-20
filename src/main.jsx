// imports
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom";
// this version is for react 18
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
