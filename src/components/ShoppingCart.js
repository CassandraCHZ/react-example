import React, { useState } from 'react';
import { Container, Card, Button, CardGroup, Row, Col, Table, InputGroup, Form, CloseButton } from 'react-bootstrap'; import "../css-components/home-product.css";

import PayPal from "./PayPal";
//json file
import Autos from "../autos.json";
import Paypal from './PayPal';

function Carrito() {
    const [carros, setCarros] = useState([Autos.autos[0], Autos.autos[1], Autos.autos[2]]);
    const [total, settotal] = useState(
        carros[0].precio + carros[1].precio + carros[2].precio
    );

    const eliminarP = (producto) => {
        console.log("hola")
        console.log("producto"+producto);
    }
    return (
        <Container fluid>
            <br></br>
            <br></br>
            <br></br>
            <h1>Carrito de Compras</h1>
            <br />
            <Row>
                <Col md="auto" lg={8}>
                    {
                        carros.map(producto => {
                            return (
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><img
                                                width="220 px"
                                                height="120 px"
                                                src={producto.imagen}
                                                title="Producto"
                                                alt="Producto" /></td>
                                            <td><b>{producto.modelo}
                                                <br />{producto.year}
                                                <br />${producto.precio} mxn
                                            </b></td>
                                            <td>
                                                <InputGroup className="mb-3">
                                                    <Button variant="outline-danger"><b>-</b></Button>
                                                    <Form.Control class="form-control-sm" style={{ maxWidth: 40 + "px" }}></Form.Control>
                                                    <Button variant="outline-success" ><b>+</b></Button>
                                                    <CloseButton variant='black' onClick={eliminarP}></CloseButton>
                                                </InputGroup>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            );
                        })
                    }

                </Col>

                <Col xs lg={4}>
                    <h1>Total a pagar: <br></br>$ {total}.00 mxn</h1>
                    <br></br>
                    <PayPal total={total}></PayPal>
                </Col>
            </Row>


        </Container>
    );
}
export default Carrito;