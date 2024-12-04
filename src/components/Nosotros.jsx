import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Nosotros.css'; 

const Nosotros = () => {
    return (
        <div className='Nosotros'>
        <h1>Sobre nosotros</h1>
        <Row className="nosotros-row" style={{ background: 'linear-gradient(to right, rgba(24, 23, 23), rgba(105, 105, 105))'}}>
            <Col xs={12} md={4} className="nosotros-text-1">
                <p style={{ color: 'white' }}>
                    <i className="fa fa-check" aria-hidden="true">
                        Canor es la parte especializada en estructuras y pérgolas de madera de Carpintería Canor, 
                        con más de 40 años de experiencia en el sector de la madera.
                    </i> 
                </p>
            </Col>
            <Col xs={12} md={8} className="nosotros-img">
                <img src={require("./images/img-22.webp")} alt="Imagen 1" className="imagen-redondeada"/>
            </Col>
        </Row>
 
        <Row className="nosotros-row" style={{ background: 'linear-gradient(to right, rgba(24, 23, 23), rgba(105, 105, 105))'}}>
            <Col xs={12} md={8} className="nosotros-img">
                <img src={require("./images/img-11.webp")} alt="Imagen 2" className="imagen-redondeada"/>
            </Col>
            <Col xs={12} md={4} className="nosotros-text-2">
                <p style={{ color: 'white' }}>
                    <i className="fa fa-check" aria-hidden="true">
                        Tenemos un equipo de alta cualificación y un backoffice para hacer realidad aquello que imagines 
                        y logran una total satisfacción del producto y su instalación final.
                    </i>
                </p>
            </Col>
        </Row>

        <Row className="nosotros-row" style={{ background: 'linear-gradient(to right, rgba(24, 23, 23), rgba(105, 105, 105))'}}>
            <Col xs={12} md={4} className="nosotros-text-3">
                <p style={{ color: 'white' }}>
                    <i className="fa fa-check" aria-hidden="true">
                        Nos especializamos en la creación de estructuras a medida, como cubiertas, pérgolas, cerramientos 
                        y revestimientos, para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.
                    </i>
                </p>
            </Col>
            <Col xs={12} md={8} className="nosotros-img">
                <img src={require("./images/img-031.webp")} alt="Imagen 3" className="imagen-redondeada"/>
            </Col>
        </Row>

        <Row className="nosotros-row" style={{ background: 'linear-gradient(to right, rgba(24, 23, 23), rgba(105, 105, 105))'}}>
            <Col xs={12} md={8} className="nosotros-img">
                <img src={require("./images/img-032.webp")} alt="Imagen 4" className="imagen-redondeada"/>
            </Col>
            <Col md={4} className="nosotros-text-4">
                <p style={{ color: 'white' }}>
                    <i className="fa fa-check" aria-hidden="true">
                        Contamos con un equipo de profesionales altamente cualificados y responsables. 
                        Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.
                    </i>
                </p>
            </Col>
        </Row>
        </div>
    );
};

export default Nosotros;




