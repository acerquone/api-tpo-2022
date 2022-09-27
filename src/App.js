import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Login, login } from "./pages/login";

function App() {
  return (
    <div className="App">
      <h1>TPO Aplicaciones</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
