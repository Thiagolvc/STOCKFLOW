// Blocos.jsx
import React from 'react';
import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.png';

const dados = [
  {
    imagem: img1,
    titulo: 'Estoque Organizado',
    descricao: 'Visualize o armazenamento de forma eficiente e moderna.',
  },
  {
    imagem: img2,
    titulo: 'Logística Moderna',
    descricao: 'Ambiente amplo para otimizar processos de movimentação.',
  },
  {
    imagem: img3,
    titulo: 'Gestão de Cargas',
    descricao: 'Rastreamento e controle com foco em produtividade.',
  },
];

const Blocos = () => {
  return (
    <section className="blocos-section">
      <h2 className="blocos-title">Nossas Soluções</h2>
      <p className="blocos-subtitle">Explore as ferramentas disponíveis para seu estoque</p>
      <div className="blocos-container">
        {dados.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.imagem} alt={item.titulo} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{item.titulo}</h3>
              <p className="card-description">{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blocos;

