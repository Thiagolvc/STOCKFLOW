import React from 'react';
import Navbar from '../components/Home/Navbar.jsx';
import Slider from '../components/Home/Slider.jsx';
import AdicionarProduto from '../components/Home/AdicionarProduto.jsx';
import ProgressSection from '../components/Home/ProgressSection.jsx';
import Blocos from '../components/Home/Blocos.jsx';
import FraseEfeito from '../components/Home/Depoimentos.jsx';
import Footer from '../components/Home/Footer.jsx';
import ContactForm from '../components/Home/ContactForm.jsx'; 
import '../styles/pages/Home.css';  
import '../styles/home-components/contact-form.css';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <AdicionarProduto />
      <ProgressSection />
      <Blocos />
      <FraseEfeito />
      <ContactForm /> 
      <Footer />
    </>
  );
}

export default App;