import "./assents/styles/global.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home.js";
import Teste from "./components/teste.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/response" element={<Teste  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
