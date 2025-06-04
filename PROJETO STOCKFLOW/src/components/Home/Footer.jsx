import React from 'react';

const Footer = () => {
  const iconMap = {
    '': { img: '/assets/th.png', url: 'https://www.youtube.com/watch?v=pm6LW_KlJvY' },
    'twitter': { img: '/assets/twitter.png', url: 'https://twitter.com/suaPagina' },
    'instagram': { img: '/assets/instagram.png', url: 'https://instagram.com/suaPagina' },
    'linkedin': { img: '/assets/linkedin.png', url: 'https://linkedin.com/in/suaPagina' },
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {[
            {
              title: 'Stockflow',
              items: ['Almoxarifado', 'Sobre nós', 'Contato']
            },
            {
              title: 'Ajuda',
              items: ['FAQ', 'reembolso', 'pedidos', 'pagamentos']
            },
            {
              title: 'Redes sociais',
              icons: ['', '', '', '']
            }
          ].map((col, i) => (
            <div className="footer-col" key={i}>
              <h4>{col.title}</h4>
              {col.items && (
                <ul>
                  {col.items.map((item, idx) => (
                    <li key={idx}><a href="#">{item}</a></li>
                  ))}
                </ul>
              )}
              {col.icons && (
                <div className="social-links">
                  {col.icons.map((icon, idx) => {
                    const { img, url } = iconMap[icon] || {};
                    return (
                      <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={icon} className="social-icon" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 STOCKFLOW. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
