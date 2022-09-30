import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Login } from "./pages/login";
import { ListaClasesProfe } from "./pages/listaclasesprofe"
import { ClaseProf } from "./pages/claseprof";
import { ListaClasesAlumno } from "./pages/listaclasesalumno";


function App() {
  return (
    <div className="App">
      <h1>TPO Aplicaciones</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login/>} />
        <Route path="listaclasesprofe" element={<ListaClasesProfe/>} />
        <Route path="claseprof" element={<ClaseProf/>} />
        <Route path="listaclasesalumno" element={<ListaClasesAlumno/>} />
      </Routes>
    </div>
  );
}

export default App;
