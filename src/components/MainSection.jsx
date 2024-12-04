import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainSection.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";  // Importa el Link de React Router
import { useNavigate } from 'react-router-dom'; // Importar useNavigate


const MainSection = () => {
    // Estado para el índice de la imagen actual
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate(); // Crear instancia de navigate

    const images = [
        require("./images/img-28.webp"),
        require("./images/img-36.webp"),
        require("./images/img-26.webp"),
        require("./images/img-18.webp"),
        require("./images/img-06.webp"),
        require("./images/img-33.webp"),
        require("./images/img-09.webp"),
        require("./images/img-07.webp"),
        require("./images/img-05.webp"),
        require("./images/img-02.webp"),
        require("./images/img-03.webp"),
        require("./images/img-04.webp"),
        require("./images/img-08.webp"),
        require("./images/img-10.webp"),
        require("./images/img-11.webp"),
        require("./images/img-12.webp"),
        require("./images/img-13.webp"),
        require("./images/img-14.webp"),
        require("./images/img-15.webp"),
        require("./images/img-16.webp"),
        require("./images/img-17.webp"),
        require("./images/img-19.webp"),
        require("./images/img-20.webp"),
        require("./images/img-21.webp"),
        require("./images/img-22.webp"),
        require("./images/img-23.webp"),
        require("./images/img-24.webp"),
        require("./images/img-25.webp"),
        require("./images/img-27.webp"),
        require("./images/img-35.webp"),
        require("./images/img-29.webp"),
        require("./images/img-30.webp"),
        require("./images/img-31.webp"),
        require("./images/img-32.webp"),
        require("./images/img-33.webp"),
        require("./images/img-34.webp"),
        require("./images/img-37.webp"),
        require("./images/img-38.webp"),
    ];

    // Función para redirigir a la página de la galería
    const goToGaleria = () => {
        navigate ("/galeria"); // Redirige a la página de galería
    };

    // Avanzar al siguiente índice
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Retroceder al índice anterior
    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Alternar entre play y pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Efecto para auto-play cuando isPlaying es true
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                handleNext();
            }, 2000); // Cambia cada 2 segundos
        }
        return () => clearInterval(interval); // Limpia el intervalo al desmontar o cambiar isPlaying
    }, [handleNext, isPlaying]);

    return (
        <Container fluid className="main-section no-padding" 
                    style={{ background: 'linear-gradient(to right, rgba(24, 23, 23), rgba(105, 105, 105))', 
                             margin: '0px', 
                             padding: '0px', 
                             minHeight: '100vh',
                             display: 'flex', 
                             flexDirection: 'column'  // Para hacer que los elementos se distribuyan bien
                    }}
        >
        <Row className="main-pre-carousel justify-content-center" style={{margin: '0px', padding: '0px', minHeight: '20vh'}}>
            <Col md={6} className="main-text-center text-white">
                <h1 className="main-title" style={{fontSize: '100px', marginBottom: '40px'}}>Pérgolas Canor</h1>
                <h2 className="main-title" style={{fontSize: '40px'}}>Fabricación propia de pérgolas de madera en Murcia y Benissa</h2>                 
                <h4>
                <em className="main-tagline" style={{fontSize: '30px'}}>
                    La mejor pérgola al mejor precio.
                </em>
                <br></br>
                <em className="main-tagline" style={{fontSize: '30px'}}>
                    Dinos tu presupuesto, ¡te lo mejoramos!
                </em>
                </h4>
            </Col>
            <div className="button-container">
                    <Button onClick={goToGaleria} variant="outline-light" className="main-btn-custom" as= "a" href="/contacto" style={{backgroundColor: '#000', borderColor: '#fff'}}>
                        Solicita presupuesto gratis
                    </Button>
            </div>
        </Row>
        <Row className="text-center mt-4 main-carousel-center carousel-background" style={{ marginTop: '-10px' }}>
            <Col md={6} className="d-flex justify-content-center position-relative">
                {/* Carrusel con botones personalizados */}
                <Carousel activeIndex={index} controls={false} indicators={false} className="position-relative main-carousel">
                    {images.map((image, idx) => (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block mx-auto main-carousel-image"
                                src={image}
                                alt={`Imagen ${idx + 1}`}
                                style={{ width: '100%', height: 'auto' }} // Asegura que la imagen se ajuste al contenedor
                            />
                        </Carousel.Item>
                    ))}  
                    {/* Botones de navegación dentro del carrusel */}
                    <Button onClick={handlePrev} className="main-carousel-prev" style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)' }}>‹</Button>
                    <Button onClick={handleNext} className="main-carousel-next" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)' }}>›</Button>
                    {/* Botón de play/pause dentro del carrusel */}
                    <Button onClick={togglePlayPause} className="main-carousel-play-pause" style={{ position: 'absolute', top: '5%', right: '5%', backgroundColor: 'grey' }}>
                        {isPlaying ? "❚❚" : "▶"}
                    </Button>                        
                </Carousel>
            </Col>
            <Row className="justify-content-center mt-3">
                <Col md={6} className="text-center">
                    <div className="button-counter-container d-flex justify-content-center align-items-center">
                        {/* Contador de imágenes */}
                        <div className="image-counter text-white me-2" style={{ position: 'absolute', left: '25%', transform: 'translateX(-100%)' }}>
                            {index + 1} / {images.length}
                        </div>
                        <Link to="/galeria">                                          
                            <Button variant="outline-light" className="btn-custom-size" style={{backgroundColor: '#000', borderColor: '#fff'}}> 
                                Visita nuestra galería
                            </Button>
                        </Link>                            
                    </div>
                </Col>
            </Row>
        </Row> 
        <h1 className="main-services-title">Nuestros Servicios</h1>
        <Row className="main-service-bloque1" style={{ background: 'linear-gradient(to right, rgba(24, 23, 23), rgba(105, 105, 105))'}}>
            <Col className="main-service-text">
                <h3 style={{ color: 'white' }}>Diseño y construcción de pérgolas</h3>                        
                <p  style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">
                        Creamos pérgolas personalizadas para adaptarse a cualquier
                        espacio y estilo, utilizando los mejores materiales y técnicas
                        de construcción.   
                    </i> 
                </p>                                                                         
            </Col>
            <Col className="main-service-image">                      
                <img src={require("./images/img-26.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>  
            </Col>
        </Row>   
        <Row className="main-service-bloque2"> 
            <Col className="main-service-image">
                <img src={require("./images/img-01.jpg")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>
            </Col>                    
            <Col className="main-service-text">
                <h3 style={{ color: 'white' }}>Revestimientos</h3>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">
                        Instalamos revestimientos de madera de alta calidad que 
                        dan un toque de elegancia y calidez a tu hogar.
                    </i>                                        
                </p>
            </Col>
        </Row>           
        <Row className="main-service-bloque3">
            <Col className="main-service-text">
                <h3 style={{ color: 'white' }}>Cerramientos y tejados</h3>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">
                        Creamos cerramientos de madera y pladur a medida que aportan
                        privacidad y protección a tu terraza o jardín.
                    </i>                                          
                </p>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">
                        Aislamos y construimos tejados con acabados en teja y tégola
                    </i>                                          
                </p>
            </Col>
            <Col className="main-service-image">
                <img src={require("./images/img-33.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>
            </Col>   
        </Row>               
        <Row className="main-service-bloque4"> 
            <Col className="main-service-image">
                <img src={require("./images/img-11.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>            
            </Col>   
            <Col className="main-service-text">
                <h3 style={{ color: 'white' }}>Reparación y mantenimiento</h3>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">                             
                        Un mantenimiento adecuado de tu pérgola le prolonga la vida
                        útil.
                    </i> 
                </p>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">                             
                        Pintura, cambio de madera estropeada, reparación de cubierta,
                        tanto de tela asfáltica, tégola o teja.
                    </i> 
                </p>               
            </Col>               
        </Row>                        
        <Row className="main-service-bloque5 reverse"> 
            <Col className="main-service-text">
                <h3 style={{ color: 'white' }}>Montaje de estructuras</h3>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">                                  
                        ¿Tienes tu propia pérgola? Nosotros te la montamos.
                    </i>                                        
                </p>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">                                  
                        Casetas, porches, toldos y marquesinas de madera.
                    </i>                                        
                </p>
                <p style={{ color: 'black' }}>
                    <i className="fa fa-check" style={{ color: 'white' }} aria-hidden="true">                                  
                        Todos los modelos y estilos.
                    </i>                                        
                </p>
            </Col>
            <Col className="main-service-image" >
                <img src={require("./images/img-07.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>            
            </Col>   
        </Row>                      
        </Container>
    );
};

export default MainSection;