//imports for react and react-dom
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom";
//this version uses react 18
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
