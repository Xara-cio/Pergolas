import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './Contacto.css'; 

const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto de envío del formulario

    const form = event.target;

    // Validación manual (opcional)
    if (!form.checkValidity()) {
        event.stopPropagation(); // Detener la propagación si no es válido
    }

    // Si todo es válido, puedes hacer algo con los datos
    if (form.checkValidity()) {
        // Aquí va tu lógica para enviar el formulario (ej. usando una API)
        console.log("Formulario válido!");
    }

    form.classList.add('was-validated'); // Agregar la clase para mostrar validación visual
};



const Contacto = () => {
    return (
        <div className="contacto-container">
            <Row className="contacto-atencion">
                <Col className="contacto-text-col" md={4}>
                    <h1 className='text-center' style={{ color: 'white'}}>Atención Personalizada</h1>
                    <p className='text-center' style={{ color: 'white'}}>
                        <i className="fa fa-check" aria-hidden="true">
                        Contamos con un equipo de 
                        profesionales altamente 
                        cualificados y responsables.
                        </i> 
                    </p>
                    <p className='text-center' style={{ color: 'white', fontSize: '14px', marginBottom: '10px' }}>
                        <i className="fa fa-check" aria-hidden="true">
                        Ellos se encargarán de
                        asesorarte y guiarte en cada 
                        paso del proyecto, desde el 
                        diseño hasta la instalación final.
                        </i> 
                    </p>                           
                </Col>
                <Col className="contacto-form-col" md={7}> {/* Columna para el formulario */}
                    <Form className='Formulario'  style={{color: 'white'}} noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Nombre y apellidos <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="Nombre y apellidos" required style={{ padding: '10px', marginBottom: '15px' }}/>
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Correo electrónico <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" required style={{ padding: '10px', marginBottom: '15px' }}/>
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mt-3">
                        <Form.Label>Teléfono <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control type="tel" placeholder="Teléfono" required style={{ padding: '10px', marginBottom: '15px' }}/>
                    </Form.Group>

                    <Form.Group controlId="formLocation" className="mt-3">
                        <Form.Label>Población <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="Población" required style={{ padding: '10px', marginBottom: '15px' }}/>
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mt-3">
                        <Form.Label>Dinos qué necesitas</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje" style={{ padding: '10px', marginBottom: '15px' }}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-4">
                        Contáctanos
                    </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mapas">
                <Col className="mapa-m">
                    <iframe
                        title="Mapa Murcia"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.7551907445227!2d-1.1161606000000002!3d37.97392740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6383a13b175091%3A0x25981e1d829e7e26!2sPergolas%20Canor!5e1!3m2!1ses!2ses!4v1731923259627!5m2!1ses!2ses"
                        width="600px"
                        height="400px"
                        aria-label="Mapa de ubicación en Murcia"                                                                  
                    />    
                    <p style = {{color: 'white'}}>
                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.7551907445227!2d-1.1161606000000002!3d37.97392740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6383a13b175091%3A0x25981e1d829e7e26!2sPergolas%20Canor!5e1!3m2!1ses!2ses!4v1731923259627!5m2!1ses!2ses" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'white', textDecoration: 'underline' }}>                                              
                             Calle Naranjo, Murcia, Murcia, (30011) 
                        </a>                                        
                    </p>                       
                </Col>
                <Col className="mapa-b">
                    <iframe
                        title="Mapa Benissa"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3830.243568274328!2d0.0555!3d38.72164600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQzJzE3LjkiTiAwwrAwMycxOS44IkU!5e1!3m2!1ses!2ses!4v1731319734330!5m2!1ses!2ses&zoomControl=false&scrollwheel=true"
                        width="600px"
                        height="400px"
                        aria-label="Mapa de ubicación en Benissa"                            
                    />
                    <p style = {{color: 'white'}}>
                        <a href="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3830.243568274328!2d0.0555!3d38.72164600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQzJzE3LjkiTiAwwrAwMycxOS44IkU!5e1!3m2!1ses!2ses!4v1731319734330!5m2!1ses!2ses&zoomControl=false&scrollwheel=true"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'white', textDecoration: 'underline' }}>                                             
                             Camino Viejo de Valencia s/n, Benissa, Alicante (03720)
                        </a>                              
                    </p>

                </Col>
            </Row>
            <Row className='lopd'>
                <Col className='lopd-col'>
                    <br></br>
                    <p>
                    Pérgolas Canor, te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuario
                    y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web http://www.pergolascanor.es
                    <br></br>
                    En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD).
                    Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
                    <br></br>
                    El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.
                    </p>
                    <br></br>                    
                </Col>
            </Row>
        </div>
    );
};

export default Contacto;
