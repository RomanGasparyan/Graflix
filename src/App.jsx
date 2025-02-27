import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

import Player from "./pages/Player/Player";
import Cards from "./pages/Cards/Cards";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/player/:id/chapter/:number" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
