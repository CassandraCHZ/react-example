import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Autos from "../autos.json";
import Usuarios from "../usuarios.json";
import Usuario from './Usuario';
import Product from './Product';
import CarCategory from './CarCategory';
import TruckCategory from './TruckCategory';
//style

export default function Administration() {
    return (
        <Container>
           <br></br>
           <br></br>
           <br></br>
           <br></br>

           <h4 align="center">Tablero</h4>

           <br></br>
           <br></br>

           <Usuario></Usuario>

           <br></br>
           <br></br>
           <br></br>

           <Product></Product>
           
           <br></br>
           <br></br>
           <br></br>

           <h4 align="center">Categorías</h4>

           <CarCategory></CarCategory>

           <br></br>
           <br></br>

           <TruckCategory></TruckCategory>
        </Container>
    );
}