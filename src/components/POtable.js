import React, { useState } from 'react';
import { Button, Modal, Table, Col, Row } from 'react-bootstrap';

export default function POtable() {
    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const [Ordenes, setOrdenes] = useState(JSON.parse(sessionStorage.getItem('ordenesDeCompra')));

    const [modalOrden,setModalOrden]=useState({});



    function verDetalles(orden){
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
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}