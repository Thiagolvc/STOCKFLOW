import React from 'react';
import '../../styles/pages/Home.css';

const ProgressSection = () => {
  return (
    <section className="progress-section" id="progress-section">
      <div className="left-content">
        <h2>Estoque sob controle é sinônimo de crescimento.</h2>
        <p>Nossos recursos inteligentes auxiliam no planejamento, na organização e na execução das suas operações diárias.</p>
      </div>

      <div className="right-content">
        <div className="progress-bar entrada">
          <h3>ENTRADA DE PRODUTOS | 85%</h3>
          <div className="bar"><div className="progress" style={{ width: '85%' }}></div></div>
        </div>

        <div className="progress-bar controle">
          <h3>CONTROLE DE ESTOQUE | 90%</h3>
          <div className="bar"><div className="progress" style={{ width: '90%' }}></div></div>
        </div>

        <div className="progress-bar categorias">
          <h3>ORGANIZAÇÃO DE CATEGORIAS | 70%</h3>
          <div className="bar"><div className="progress" style={{ width: '70%' }}></div></div>
        </div>

        <div className="progress-bar reposicao">
          <h3>PLANEJAMENTO DE REPOSIÇÃO | 60%</h3>
          <div className="bar"><div className="progress" style={{ width: '60%' }}></div></div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
