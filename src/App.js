import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import "./App.css";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Router>
  );
}

export default App;

