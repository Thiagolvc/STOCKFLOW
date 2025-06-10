// Slider.jsx
import React from 'react';
import '../../styles/home-components/slider.css';


function Slider() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Transforme dados em decisões inteligentes hoje.</h1>
        <p>Crie dashboards interativos e melhore sua tomada de decisão com nossa tecnologia inovadora.</p>
        <div className="hero-buttons">
          <button className="hero-btn-outline">Começar</button>
          <button className="hero-btn">Saiba</button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
