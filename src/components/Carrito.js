import React from 'react';
import { Container } from 'react-bootstrap';
import "../css-components/home-product.css";
//json file
import Autos from "../autos.json";

const Carrito = () => {
    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <h1>Carrito</h1>
            
        </Container>
    );

}

export default Carrito;
/*
var json_data = Autos;
var array = [];

for(var i in json_data)
    array.push([i, json_data [i]]);
    */