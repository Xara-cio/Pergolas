import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} expand="lg" className="py-3">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col xs={12} md={4} className="text-start d-flex flex-column"> 
            <h3>Pérgolas Canor</h3>
            <p>
              Nos especializamos en la creación de estructuras a medida, como
              cubiertas, pérgolas, cerramientos y revestimientos, para que
              puedas disfrutar de tu hogar y al aire libre con estilo y confort.
            </p>
            <div className="d-flex flex-column align-items-start mb-3">
              <Button variant="outline-light" className="mb-3" as= "a" href="/contacto">Solicita tu presupuesto</Button>
              <Button variant="success" className="border-white" as= "a" href="https://web.whatsapp.com/"
              target="_blank" >Consulta por WhatsApp</Button>
            </div>
          </Col>

          <Col xs={12} md={3} className="text-center"> 
            <h5>Contacto</h5>
            <p> <a
                href="https://www.google.com/maps?q=Camino+Viejo+de+Valencia,+Benissa,+Alicante"
                className="text-light">Camino Viejo de Valencia<br/></a>
                Benissa, Alicante 03720<br />
                965 730 087
            </p>
            <p> <a
                href="https://www.google.com/maps/place/Pergolas+Canor/@37.974165,-1.1187959,576m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd6383a13b175091:0x25981e1d829e7e26!8m2!3d37.974165!4d-1.116221!16s%2Fg%2F11y4szfng6?entry=tts&g_ep=EgoyMDI0MDUyOS4wKgBIAVAD"
                className="text-light">Calle Naranjo<br /> </a>
                Murcia, Murcia 30011<br />
                968 842 335
            </p>
            <p>info@pergolascanor.es<br/>
              614 30 63 04<br />
              620 45 39 05
            </p>
          </Col>

          <Col xs={12} md={2} className="text-start">
            <h5>Menú</h5>
            <Nav className="flex-column">
              <a href="/" className="text-light">Inicio</a>
              <a href="/galeria" className="text-light">Galería</a>
              <a href="/nosotros" className="text-light">Nosotros</a>
              <a href="/contacto" className="text-light">Contacto</a>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;