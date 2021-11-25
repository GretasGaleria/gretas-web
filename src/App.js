import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Galeria from "./components/Galeria";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
