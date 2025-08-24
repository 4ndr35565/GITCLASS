import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">Mi App</div>

        {/* Links pantalla grande */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>

        {/*hamburguesa*/}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
      
      <main className="main-content">
        <h1>Bienvenido a Mi App</h1>
        <p>Aquí inicia tu contenido principal.</p>
      </main>
    </div>
  );
}
