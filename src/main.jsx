//imports for react and react-dom
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom";

/*Creating a root element by selecting the HTML element with id 'root' and rendering the App component within it.
React.StrictMode is the wrapper component that helps manage the application.
*/
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
