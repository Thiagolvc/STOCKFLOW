import React, { useState, useEffect } from 'react';
import '../../styles/home-components/Depoimentos.css';

const depoimentos = [
  {
    nome: 'Maria Silva',
    texto: 'O sistema otimizou completamente nosso processo de gestão. Simples e eficiente!',
  },
  {
    nome: 'João Pereira',
    texto: 'Muito intuitivo. Agora conseguimos ter uma visão clara do nosso estoque.',
  },
  {
    nome: 'Luciana Andrade',
    texto: 'Além de bonito visualmente, trouxe resultados reais para minha empresa.',
  },
   {
    nome: 'Marcio',
    texto: 'Além de bonito visualmente, trouxe resultados reais para minha empresa.',
  },
];

const Depoimentos = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
    }, 5000); // muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  // Pega os próximos 3 depoimentos, com loop circular
  const getDepoimentosVisiveis = () => {
    return [0, 1, 2].map(i => depoimentos[(index + i) % depoimentos.length]);
  };

  return (
    <section className="depoimentos">
      <div className="depoimentos-cards">
        {getDepoimentosVisiveis().map((dep, idx) => (
          <div className="card" key={idx}>
            <p className="texto">"{dep.texto}"</p>
            <p className="nome">— {dep.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;