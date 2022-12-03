import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
export default function POtable() {
    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const [Pedido1, setPedido1] = useState({
        codigo: "YMTRYU90",
        fecha: "2022/11/03",
        precio: 590000,
        metodo: "Transferencia",
        estatus: "Entregado",
        factura: "No",
    })
    const [Pedido2, setPedido2] = useState({
        codigo: "AATRYU95",
        fecha: "2022/11/03",
        precio: 590000,
        metodo: "Paypal",
        estatus: "En Proceso",
        factura: "Sí",
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
                        <td>Pedido1.factura</td>
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
                                background: "#14A44D",
                                borderRadius: 5 + "px",
                                color: "white"
                            }}>{Pedido2.estatus}
                            </div>
                        </td>
                        <td>Pedido2.factura</td>
                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Detalles</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Modal show={showAlert} onHide={alertClose}>
                <Modal.Header closeButton style={{
                    background: "#a5edff"
                }} >
                    <Modal.Title>Detalles del pedido: {Pedido1.codigo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Agradecemos todos tus comentarios. Responderemos a la mayor brevedad posible.</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}