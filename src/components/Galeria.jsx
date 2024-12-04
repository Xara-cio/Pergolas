import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Galeria.css';

const Galeria = () => {

  return (
    <Container fluid className="galeria-container">
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image src={require("./images/img-45.webp")} alt="Imagen 1" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image src={require("./images/img-02.webp")} alt="Imagen 2" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image src={require("./images/img-03.webp")} alt="Imagen 3" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />        
        </Col>
      </Row>

      {/* Segunda fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-04.webp")} alt="Imagen 4" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-05.webp")} alt="Imagen 5" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-06.webp")} alt="Imagen 6" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px"}} />
        </Col>
      </Row>

      {/* Tercera fila */}
      <Row>
        <Col className="col" xs={6} md={4} >       
            <Image  src={require("./images/img-07.webp")} alt="Imagen 7" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col>
          <Image  src={require("./images/img-08.webp")} alt="Imagen 8" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />        
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-09.webp")} alt="Imagen 9" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>

      {/** Cuarta fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-10.webp")} alt="Imagen 10" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-11.webp")} alt="Imagen 11" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-12.webp")} alt="Imagen 12" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>

      {/** Quinta fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-13.webp")} alt="Imagen 13" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-14.webp")} alt="Imagen 14" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-15.webp")} alt="Imagen 15" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>     

      {/** Sexta fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-16.webp")} alt="Imagen 16" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-17.webp")} alt="Imagen 17" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-18.webp")} alt="Imagen 18" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>

      {/** Séptima fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-19.webp")} alt="Imagen 19" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-20.webp")} alt="Imagen 20" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-21.webp")} alt="Imagen 21" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>  

      {/** Octava fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-22.webp")} alt="Imagen 22" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-23.webp")} alt="Imagen 23" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-24.webp")} alt="Imagen 24" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>                

      {/** Novena fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-25.webp")} alt="Imagen 25" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-26.webp")} alt="Imagen 26" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-27.webp")} alt="Imagen 27" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row> 

      {/** Décima fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-28.webp")} alt="Imagen 28" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-29.webp")} alt="Imagen 29" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-30.webp")} alt="Imagen 30" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>

      {/** undécima fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-31.webp")} alt="Imagen 31" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-32.webp")} alt="Imagen 32" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-33.webp")} alt="Imagen 33" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>

      {/** duodécima fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-34.webp")} alt="Imagen 34" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-35.webp")} alt="Imagen 35" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-36.webp")} alt="Imagen 36" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>  

      {/** duodécima fila */}
      <Row>
        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-37.webp")} alt="Imagen 37" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />       
        </Col>

        <Col className="col" xs={6} md={4} >
          <Image  src={require("./images/img-38.webp")} alt="Imagen 38" style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }} />
        </Col>
      </Row>            

    </Container>
  );
};

export default Galeria;
