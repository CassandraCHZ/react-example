import React from 'react';
import { Container } from 'react-bootstrap';
import "../css-components/home-product.css";

//json file
import Autos from "../autos.json";

const HomeProducts = () => {
    return (
        <Container fluid>
            <br/>
            <h1 class="text-center">PRODUCTOS DESTACADOS</h1>
            <br></br>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    Autos.map(auto => {
                        return (
                            <div class="col">
                                <div class="card border-info mb-3 card text-center" >
                                    <img
                                        width="50"
                                        height="100%"
                                        src={auto.imagen}
                                        title={auto.modelo}
                                        class="card-img-top"
                                        alt={auto.modelo + ". " + auto.year} />
                                    <div class="card-body">
                                        <h3 class="card-title">{auto.modelo}</h3>
                                        <h6 class="card-text">{"$" + auto.precio + " mxn"}</h6>
                                        <h6 class="card-text">{auto.caracteristicas}</h6>
                                        <br />
                                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <br></br>
        </Container>
    );

}

export default HomeProducts;