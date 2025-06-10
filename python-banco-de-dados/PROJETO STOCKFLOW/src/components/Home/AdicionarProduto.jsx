import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img-6.jpg';



const AdicionarProduto = () => {
  return (
    <div className="section">
      <img src={img} className="img" alt="Produto" />
      <div className="section-content">
        <h2>GERENCIE SEU ESTOQUE COM EFICIÊNCIA</h2>
        <p>Cadastre produtos com um clique e veja como é fácil gerenciar seu estoque.
        Sem complicações, sem custos. Só eficiência.
        </p>      
        <Link to="/sistema" className="section-button">
        Saiba mais
        </Link>
      </div>
    </div>
  );
};

export default AdicionarProduto;
