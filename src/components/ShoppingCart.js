import React, { useState } from 'react';
import { Container, Row, Col, Table, InputGroup,CloseButton } from 'react-bootstrap'; 
import "../css-components/home-product.css";

import PayPal from "./PayPal";
function Carrito() {
    const [carros, setCarros] = useState(JSON.parse(localStorage.getItem('miCarrito')));

    (async function cargar() {
        let pay = (carros.reduce((acumulador, actual) => acumulador + actual.precio, 0)) * 1.16;
        sessionStorage.setItem("totalPP", pay);
    })();

    function removeObjectWithId(arr, id) {
        // Making a copy with the Array from() method
        const arrCopy = Array.from(carros);
        const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === id);
        arrCopy.splice(objWithIdIndex, 1);
        setCarros(arrCopy);
        //local storage delete record
        var carr = JSON.parse(localStorage.getItem('miCarrito'));
        localStorage.setItem('miCarrito', JSON.stringify(carr.filter(carrr => carrr.id !== id)));
        let pay = (carros.reduce((acumulador, actual) => acumulador + actual.precio, 0)) * 1.16;
        sessionStorage.setItem("totalPP", pay);
        return arrCopy;
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
                                                    <CloseButton variant='black'
                                                        onClick={() => {
                                                            console.log("HoLa" + producto.modelo);
                                                            let car = carros.find(carro => carro.modelo === producto.modelo);
                                                            console.log(car);
                                                            const newArr = removeObjectWithId(carros, producto.id);
                                                        }

                                                        }>
                                                    </CloseButton>
                                                </InputGroup>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            );
                        })
                    }

                </Col>

                {(sessionStorage.getItem("totalPP") == 0) ?
                    <Row>
                        <h2>Tu carrito esta vacio.</h2>
                    </Row> :
                    <Col xs lg={4}>
                        <h1>Total a pagar con IVA:<br></br>$ {sessionStorage.getItem("totalPP")} mxn</h1>
                        <br></br>
                        <PayPal></PayPal>
                    </Col>
                }

            </Row>


        </Container>
    );
}
export default Carrito;

/*
botnes perrones mas y menos cantidad
<Button variant="outline-danger"><b>-</b></Button>
                                                    <Form.Control class="form-control-sm" style={{ maxWidth: 40 + "px" }}></Form.Control>
                                                    <Button variant="outline-success" ><b>+</b></Button>
*/