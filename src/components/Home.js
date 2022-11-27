import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import Banner from "./Banner";
import HomeProducts from "./HomeProducts";

const Home = () => {
    return (
        <Container fluid>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="http://www.diamondpearlz.com/wp-content/uploads/2015/12/banner-1.jpg"                            class="d-block w-100"
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
                            src="https://www.carrepairadelaidesa.com.au/wp-content/uploads/2021/10/Car-Engine-Repair-Replacement-Banner.png"
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
                            src="https://pbs.twimg.com/media/FAB56EBVUBAvYBb.png"                            class="d-block w-100"
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
                            src="https://pngimg.com/uploads/electric_car/electric_car_PNG53.png"                            class="d-block w-100"
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
                
                <h2 style={{ textAlign: "center" }}><b>Desarrolladores Web:</b>
                </h2>
                <h4 style={{ textAlign: "center" }}>Gutiérrez Hernández Luis Fernando
                </h4>
                <h4 style={{ textAlign: "center" }}>Hernández Zavala Cassandra Celheotl
                </h4>
                <br></br>
            </div>
            <HomeProducts></HomeProducts>
            <Banner></Banner>
        </Container>
    );

}

export default Home;