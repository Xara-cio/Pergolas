import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import './Header.css'; 


const Header = () => {
  return (
    <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} expand="lg" className="py-3">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Contenedor del logo y título con enlace a la pagina web */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img 
            src={require("./images/logo.webp")} 
            alt="Logo Pérgolas Canor"  
            className="logo mx-1" 
            style={{ width: "100px", height: "auto", textAlign: "left" }}
          /> 
          <span className="ms-2" style={{ color: '#fff' }} >Pérgolas Canor</span>
        </Navbar.Brand>
          {/* Toggle del Navbar en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />                
          {/* Contenido del Navbar */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="text-center">
              <Nav.Link href="/" className="nav-link" style={{ color: '#fff', textDecoration: 'underline', marginRight: '20px'}}>Inicio</Nav.Link>
              <Nav.Link href="/galeria/" className="nav-link" style={{ color: '#fff', textDecoration: 'underline', marginRight: '20px' }}>Galería</Nav.Link>
              <Nav.Link href="/nosotros/" className="nav-link" style={{ color: '#fff', textDecoration: 'underline', marginRight: '20px'}}>Nosotros</Nav.Link>
              <Nav.Link href="/contacto/" className="nav-link" style={{ color: '#fff', textDecoration: 'underline' }}>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Bloque de botones y redes sociales */}
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex mb-2"> 
              <a 
                href="https://web.whatsapp.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-icon me-2" 
                style={{ color: '#4CAF50', fontSize: '22px', marginRight: '15px'}}
              >
                <FaWhatsapp className="social-icon" />
              </a>
              <a 
                href="https://www.facebook.com/PergolasCanor" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="facebook-icon  me-2" 
                style={{ color: '#2196F3', fontSize: '22px', marginRight: '15px' }}
              >
                <FaFacebookF className="social-icon" />
              </a>
              <a 
                href="https://www.instagram.com/pergolascanor/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="instagram-icon"
                style={{ color: '#E91E63', fontSize: '22px' }}
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>

            <div className="d-flex w-100 mb-2">
              <Button variant="outline-light" className="flex-grow-1 me-2 button-margin" as= "a" href="/contacto" style={{ marginRight: '10px' }}>
                Solicita tu presupuesto
              </Button>
              <Button variant="outline-light" className="flex-grow-1 button-margin">
                Llámame 614306304
              </Button>
            </div>

          </div>
      </Container>
    </Navbar>
  );
};

export default Header;