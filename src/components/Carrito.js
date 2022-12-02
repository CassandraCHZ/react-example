import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Container, Table, Button } from 'react-bootstrap';import "../css-components/home-product.css";

import PayPal from "./PayPal";
//json file
import Autos from "../autos.json";
import Paypal from './PayPal';

function Carrito() {
    const [carros, setCarros] = useState(Autos);
    const [total, settotal] = useState(
        carros.autos[0].precio+carros.autos[1].precio+carros.autos[2].precio
    );
    return (
        <Container fluid>
            <br></br>
            <br></br>
            <br></br>
            <h1>Carrito de Compras</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{carros.autos[0].modelo}</td>
                        <td>2</td>
                        <td>{carros.autos[0].precio}</td>
                        <td><Button variant="danger" > Eliminar </Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{carros.autos[0].modelo}</td>
                        <td>1</td>
                        <td>{carros.autos[1].precio}</td>
                        <td><Button variant="danger" > Eliminar </Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{carros.autos[0].modelo}</td>
                        <td>1</td>
                        <td>{carros.autos[2].precio}</td>
                        <td><Button variant="danger" > Eliminar </Button></td>
                    </tr>
                </tbody>
            </Table>
            <br></br>
            <h1>Total a pagar: $ {total}.00 mxn</h1>
            <br></br>
            <PayPal total={total}></PayPal>
            

        </Container>
    );
}
export default Carrito;