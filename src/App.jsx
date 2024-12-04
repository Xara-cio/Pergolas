
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Galeria from './components/Galeria'; 
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';



function App() {
  return (
    <Router>
      <Navbar /> {/* Aquí incluyes el Header */}
      
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/" element={<MainSection />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/" element={<MainSection />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer /> {/* Aquí incluyes el Footer */}
    </Router>
  );
}

export default App;