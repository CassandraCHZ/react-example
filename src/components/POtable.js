import React, { useState } from 'react';
import { Button, Modal, Table, Col, Row } from 'react-bootstrap';

export default function POtable() {
    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const [Ordenes, setOrdenes] = useState(JSON.parse(sessionStorage.getItem('ordenesDeCompra')));

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
                    {
                        Ordenes.map(
                            orden => {
                                return (
                                    <tr>
                                        <td>1</td>
                                        <td>{orden.codigo}</td>
                                        <td>{orden.fecha}</td>
                                        <td>{orden.precio}</td>
                                        <td>{orden.metodo}</td>

                                        <td>
                                            <div style={{
                                                background: "#14A44D",
                                                borderRadius: 5 + "px",
                                                color: "white"
                                            }}>{orden.estatus}
                                            </div>
                                        </td>
                                        <td>{orden.factura}</td>
                                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Detalles</Button></td>
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
                    <Modal.Title>Detalles del pedido: </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: '#DFE9E9' }}>
                    <h1>hola</h1>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}