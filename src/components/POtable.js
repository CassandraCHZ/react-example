import React, { useState } from 'react';
import { Button, Modal, Table, Col, Row } from 'react-bootstrap';

export default function POtable() {
    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const [Ordenes, setOrdenes] = useState(JSON.parse(sessionStorage.getItem('ordenesDeCompra')));

    const [modalOrden, setModalOrden] = useState({});


    function verDetalles(orden) {
        console.log(orden.codigo);
        setModalOrden(orden);
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
                        <th>Factura</th>
                        <th>Método de Pago</th>
                        <th>Estatus</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    {
                        Ordenes.map(
                            orden => {
                                return (
                                    <tr>
                                        <td>1</td>
                                        <td>{orden.codigo}</td>
                                        <td>{orden.fecha}</td>
                                        <td>{orden.precio}</td>
                                        <td>{orden.factura}</td>
                                        <td>{orden.metodo}</td>
                                        <td>
                                            <div style={{
                                                background: "#14A44D",
                                                borderRadius: 5 + "px",
                                                color: "white"
                                            }}>{orden.estatus}
                                            </div>
                                        </td>
                                        <td><Button onClick={() => verDetalles(orden)} variant="link" style={{ color: "blue" }}>Detalles</Button></td>
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </Table>

            <Modal size="lg" show={showAlert} onHide={alertClose}>
                <Modal.Header closeButton style={{
                    background: "#AAB7B8"
                }} >
                    <Modal.Title>Detalles del pedido: {modalOrden.codigo}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: '#DFE9E9' }}>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5><b>Referencia de pedido {modalOrden.codigo} - efectuado el {modalOrden.fecha}</b></h5>
                    </div>

                    <br></br>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5>Paquetería: ESTAFETA</h5>
                        <h5>Modo de pago: {modalOrden.metodo}</h5>
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
                                    <td>{modalOrden.fecha}</td>
                                    <td>{modalOrden.estatus}</td>
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
                                    <td>{modalOrden.fecha}</td>
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