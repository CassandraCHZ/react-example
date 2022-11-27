import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="https://miro.medium.com/max/1400/1*5Jv5YAGqu3zL5endb8dtBA.png"
                            class="d-block w-100"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }}>React-Bootstrap</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="https://i0.wp.com/jrgonzalez.es/wp-content/uploads/2021/05/javascript-tips.jpg?ssl=1"
                            class="d-block w-100"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }} >JavaScript</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4 "
                            src="https://serv3.raiolanetworks.es/blog/wp-content/uploads/03-que-es-laravel.jpg"
                            class="d-block w-100"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }}>Lavarel</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="https://blog.knoldus.com/wp-content/uploads/2020/08/git.png"
                            class="d-block w-100"
                            alt="Fourth slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }}>Git Control Version</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <div>
                <br></br>
                <h2 style={{ textAlign: "center" }}><b>Acerca de...</b></h2>
                <br></br>
                <h4 style={{ textAlign: "center" }}>Somos el e-commerce "AbarrotesCF", nosotros nos encargamos de que tus tiendas de abarrotes tengan la tecnología
                    adecuada para poder tener todo organizado. Entre algunas de las funciones con las que cuenta esta
                    aplicación son: lecturas de los productos y los empleados, altas de empleados y productos, y
                    actualizaciones de diferentes campos de los productos y empleados, y mucho más.
                </h4>
                <br></br>
                <h2 style={{ textAlign: "center" }}><b>Desarrolladores Web:</b>
                </h2>
                <h4 style={{ textAlign: "center" }}>Gutiérrez Hernández Luis Fernando
                </h4>
                <h4 style={{ textAlign: "center" }}>Hernández Zavala Cassandra Celheotl
                </h4>
                <br></br>
            </div>
        </Container>
    );

}

export default Home;