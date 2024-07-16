import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
