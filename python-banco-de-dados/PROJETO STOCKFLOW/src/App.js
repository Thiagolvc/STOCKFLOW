import React from "react";
import Section from "./components/Section";
import ProgressSection from "./components/ProgressSection";
import FaixaRolante from "./components/FaixaRolante";
import RollBar from "./components/RollBar";
import FraseEfeito from "./components/Depoimentos";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Section />
      <ProgressSection />
      <FaixaRolante />
      <RollBar />
      <FraseEfeito />
      <Footer />
    </>
  );
}

export default App;