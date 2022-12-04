import React, { useState } from 'react';
import { Container, Card, Button, CardGroup, Row, Col, Table } from 'react-bootstrap'; import "../css-components/home-product.css";

import PayPal from "./PayPal";
//json file
import Autos from "../autos.json";
import Paypal from './PayPal';

function Carrito() {
    const [carros, setCarros] = useState([Autos.autos[0], Autos.autos[1], Autos.autos[2]]);
    const [total, settotal] = useState(
        carros[0].precio + carros[1].precio + carros[2].precio
    );

    const eliminarP = () => {

    }
    return (
        <Container fluid>
            <br></br>
            <br></br>
            <br></br>
            <h1>Carrito de Compras</h1>
            <br />
            <Row>
                <Col md="auto" lg={7}>
                    {carros.map(function (producto) {
                        return (
                            <Col md="auto" lg={7}>
                                <div style={{
                                    background: "white",
                                    color: "white",
                                    padding: "12px",
                                }}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td><img
                                                    width="50%"
                                                    height="100%"
                                                    src={producto.imagen}
                                                    title="Producto"
                                                    alt="Producto" /></td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        );
                    })
                    }
                </Col>

                <Col xs lg={5}>
                    <h1>Total a pagar: <br></br>$ {total}.00 mxn</h1>
                    <br></br>
                    <PayPal total={total}></PayPal>
                </Col>
            </Row>


        </Container>
    );
}
export default Carrito;