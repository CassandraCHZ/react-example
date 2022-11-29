import React from 'react';
import { Container } from 'react-bootstrap';
import "../css-components/home-product.css";

//json file
import Autos from "../autos.json";

const HomeProducts = () => {
    return (
        <Container fluid>
            <h1 class="text-center">PRODUCTOS</h1>
            <h2 class="text-center">DESTACADOS</h2>
            <br></br>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    Autos.map(auto => {
                        return (
                            <div class="col">
                                <div class="card border-info mb-3 card text-center">
                                    <img
                                        src={auto.imagen}
                                        title={auto.modelo}
                                        class="card-img-top"
                                        alt={auto.modelo +". " +auto.year} />
                                    <div class="card-body">
                                        <h5 class="card-title">{auto.modelo}</h5>
                                        <p class="card-text">{"$"+auto.precio}</p>
                                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://cdn.forbes.com.mx/2016/06/tsuru-nissan.jpg"
                        title="Tsuru"
                        class="card-img-top"
                        alt="Tsuru" />
                    <div class="card-body">
                        <h5 class="card-title">T-suru 2001</h5>
                        <p class="card-text">$34,000</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://www.mercedes-benz.com.mx/es/passengercars/the-brand/amg-brand/mercedes-amg-brand/brand/amg-performance-vehicles/_jcr_content/swipeableteaserbox/par/swipeableteaser_25e1/asset.MQ6.12.20220406155538.jpeg"
                        title="Mercedes-Benz"
                        class="card-img-top"
                        alt="mercedes-benz" />
                    <div class="card-body">
                        <h5 class="card-title">Mercedes-Benz 2017</h5>
                        <p class="card-text">$90,587</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/open-graph/2022/nameplate/explorer/ford-explorer-2022-camioneta-suv-version-xlt-equipamiento-asistencias.jpg"
                        title="Explorer Ford"
                        class="card-img-top"
                        alt="Ford" />
                    <div class="card-body">
                        <h5 class="card-title">Explorer ST Ford</h5>
                        <p class="card-text">$592,800</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://www.bmw.com.mx/content/dam/bmw/common/all-models/2-series/gran-coupe/2021/navigation/BMW-2-Series-gran-coupe_ModelCard.png"
                        title="BMW"
                        class="card-img-top"
                        alt="BMW" />
                    <div class="card-body">
                        <h5 class="card-title">BMW Serie 2</h5>
                        <p class="card-text">$874,800</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQp21bw5aPqydswKok1OXQQi0NBEPXPcZTcQ&usqp=CAU"
                        title="Chevrolet-Camaro"
                        class="card-img-top"
                        alt="Chevrolet-Camaro" />
                    <div class="card-body">
                        <h5 class="card-title">Chevrolet Camaro 2018</h5>
                        <p class="card-text">$1,517,920</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://www.ccarprice.com/products/Audi_RS3_Sedan_performance_2023.jpg"
                        title="Sedan"
                        class="card-img-top"
                        alt="Sedan" />
                    <div class="card-body">
                        <h5 class="card-title">Sedán RS3 2023</h5>
                        <p class="card-text">$1,080,000</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/performance/2022-camaro-coupe/colorizer/jellys/01-images/black.jpg?imwidth=960"
                        title="Camaro-Coupé"
                        class="card-img-top"
                        alt="Camaro-Coupé" />
                    <div class="card-body">
                        <h5 class="card-title">Camaro Coupé</h5>
                        <p class="card-text">$1,620,000</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://cdn-api.toyotacr.com/toyotacr_website/uploads/gallery/497791481172c816f974da2c55a47c1dee2bb6a7.png"
                        title="Toyota-Fortuner"
                        class="card-img-top"
                        alt="Toyota-Fortuner" />
                    <div class="card-body">
                        <h5 class="card-title">Toyota Fortuner</h5>
                        <p class="card-text">$800,000</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>


            <div class="col">
                <div class="card border-info mb-3 card text-center">
                    <img
                        src="https://www.toyota.mx/sites/default/files/galeria360/Hilux_Blanco36.jpg"
                        title="Toyota-Hilux"
                        class="card-img-top"
                        alt="Toyota-Hilux" />
                    <div class="card-body">
                        <h5 class="card-title">Toyota Hilux</h5>
                        <p class="card-text">$980,550</p>
                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto</a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </Container>
    );

}

export default HomeProducts;