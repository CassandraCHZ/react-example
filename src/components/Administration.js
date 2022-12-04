import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import Autos from "../autos.json";
//style

export default function Admin() {

    const [productos, setProductos] = useState(
        Autos.autos
    )

    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);


    const sendMessage = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();

    }
    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <h1>Panel de Administración</h1>
                <h1>{productos[0].modelo}</h1>
                <h5>Estimado usuario, dejamos a tu disposición este canal de comunicación, para que puedas comunicarte con nosotros.</h5>
            </Row>
            <Row style={{ justifyContent: 'left' }} >
                <Col >
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Imagen</th>
                                <th>Modelo</th>
                                <th>Año</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody >
                            {productos.map(function (producto, index) {
                                return (
                                    <tr data-index={index}>
                                        <td>{producto.id}</td>
                                        <td>
                                        <img
                                    src={producto.imagen}
                                    title="Logo"
                                    alt="Logo del Proyecto"
                                    width="40"
                                    height="40" />
                                            
                                            </td>
                                        <td>{producto.modelo}</td>
                                        <td>{producto.year}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.precio}</td>
                                    </tr>
                                );
                            })
                            }
                        </tbody>
                    </Table>
                </Col>

                <Col md={5}>

                </Col>
            </Row>

            <Modal show={showAlert} onHide={alertClose}>
                <Modal.Header style={{
                    background: "#a5edff"
                }} closeButton>
                    <Modal.Title>Mensaje enviado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Agradecemos todos tus comentarios. Responderemos a la mayor brevedad posible.</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}