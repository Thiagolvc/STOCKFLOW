import React from "react";
import Navbar from "../Home/Navbar";
import Slider from "../Home/Slider";
import AdicionarProduto from "../Home/AdicionarProduto";
import ProgressSection from "../Home/ProgressSection";
import Blocos from "../Home/Blocos";
import FraseEfeito from "../Home/Depoimentos";
import Contato from "../Home/ContactForm.jsx";
import Footer from "../Home/Footer";

const Home = () => (
  <>
    <Navbar />
    <Slider />
    <AdicionarProduto />
    <ProgressSection />
    <Blocos />
    <FraseEfeito />
    <Contato/>
    <Footer />
  </>
);

export default Home;