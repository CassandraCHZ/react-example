import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Autos from "../autos.json";
import Usuarios from "../usuarios.json";
import Usuario from './Usuario';
import Product from './Product';
//style

export default function Administration() {
    return (
        <Container>
           <br></br>
           <br></br>
           <br></br>
           <br></br>

           <h4 align="center" color="green">Dashboard</h4>

           <br></br>
           <br></br>

           <Usuario></Usuario>

           <br></br>
           <br></br>
           <br></br>

           <Product></Product>
           
        </Container>
    );
}