import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Galeria from "./components/Galeria";
import GaleriaTeste from "./components/GaleriaTeste";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/teste1234" element={<GaleriaTeste />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
