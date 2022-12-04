import React, { useState } from 'react';
import { Button, Modal, Table, Col, Row } from 'react-bootstrap';

export default function POtable() {
    const [showAlert, setShowAlert] = useState(true);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const [Pedido1, setPedido1] = useState({
        codigo: "YMTRYU90",
        fecha: "2022/11/03",
        precio: 590000,
        metodo: "Transferencia",
        estatus: "Entregado",
        factura: "No"
    })

    const [Pedido2, setPedido2] = useState({
        codigo: "AATRYU95",
        fecha: "2022/11/03",
        precio: 590000,
        metodo: "Paypal",
        estatus: "En Proceso",
        factura: "Sí"
    })

    const VerDetalles = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();
    }

    return (
        <>
            <Table striped bordered hover variant="ligth" 
                style={{
                    background: "#a5edff",
                    borderColor: "gray"
                }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Código de pedido</th>
                        <th>Fecha</th>
                        <th>Precio Total(MXN)</th>
                        <th>Método de Pago</th>
                        <th>Estatus</th>
                        <th>Factura</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    <tr>
                        <td>1</td>
                        <td>{Pedido1.codigo}</td>
                        <td>{Pedido1.fecha}</td>
                        <td>{Pedido1.precio * 1.16}</td>
                        <td>{Pedido1.metodo}</td>

                        <td>
                            <div style={{
                                background: "#14A44D",
                                borderRadius: 5 + "px",
                                color: "white"
                            }}>{Pedido1.estatus}
                            </div>
                        </td>
                        <td>{Pedido1.factura}</td>
                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Detalles</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{Pedido2.codigo}</td>
                        <td>{Pedido2.fecha}</td>
                        <td>{Pedido2.precio * 1.16}</td>
                        <td>{Pedido2.metodo}</td>

                        <td>
                            <div style={{
                                background: "#E4A11B",
                                borderRadius: 5 + "px",
                                color: "white"
                            }}>{Pedido2.estatus}
                            </div>
                        </td>
                        <td>{Pedido2.factura}</td>
                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Detalles</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Modal size="lg" show={showAlert} onHide={alertClose}>
                <Modal.Header closeButton style={{
                    background: "#AAB7B8"
                }} >
                    <Modal.Title>Detalles del pedido:  {Pedido1.codigo}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: '#DFE9E9' }}>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5><b>Referencia de pedido {Pedido1.codigo} - efectuado el {Pedido1.fecha}</b></h5>
                    </div>

                    <br></br>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5>Paquetería: ESTAFETA</h5>
                        <h5>Modo de pago: {Pedido1.metodo}</h5>
                    </div>

                    <br></br>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5> <b>Siga su pedido paso a paso </b></h5>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{Pedido1.fecha}</td>
                                    <td>{Pedido1.estatus}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <br></br>

                    <Row>
                        <Col>
                            <div style={{
                                background: "white",
                                color: "white",
                                padding: "12px",
                            }}>
                                <h5> <b>Dirección de entrega</b></h5>
                                <h5>Humberto Cuevas</h5>
                                <h5>Salvador Novo 525</h5>
                                <h5>20165 Aguascalientes</h5>
                                <h5>Aguascalientes</h5>
                                <h5>México</h5>
                                <h5>4491020947</h5>
                                <h5>12154521</h5>
                            </div>
                        </Col>

                        <Col >
                            <div style={{
                                background: "white",
                                color: "white",
                                padding: "12px",
                            }}>
                                <h5> <b>Dirección de facturación</b></h5>
                                <h5>Humberto Cuevas</h5>
                                <h5>Salvador Novo 525</h5>
                                <h5>20165 Aguascalientes</h5>
                                <h5>Aguascalientes</h5>
                                <h5>México</h5>
                                <h5>4491020947</h5>
                                <h5>12154521</h5>
                            </div>
                        </Col>
                    </Row>

                    <br></br>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5> <b>Producto(s) a comprar</b></h5>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio Unitario</th>
                                    <th>Precio Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mercedes A3</td>
                                    <td>1</td>
                                    <td>{Pedido1.precio}</td>
                                    <td>{Pedido1.precio * 1.16}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <br></br>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Paquetería</th>
                                    <th>Peso</th>
                                    <th>Costo de envío</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{Pedido1.fecha}</td>
                                    <td>ESTAFETA</td>
                                    <td>-</td>
                                    <td>$20.00 MXN</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}