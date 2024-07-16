// imports
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// this version is for react 18
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
