import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
