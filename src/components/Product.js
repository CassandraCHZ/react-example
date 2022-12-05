import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import MerchEdit from './MerchEdit';

export default function Producto() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [merchs, setMerch] = useState([
        {
            id: 1,
            modelo: "Mercedes A3",
            year: "2022",
            precio: "590000"
        },
        {
            id: 2,
            modelo: "Corolla",
            year: "2022",
            precio: "390000"
        },
        {
            id: 3,
            modelo: "Audi A3",
            year: "2022",
            precio: "470000"
        },
        {
            id: 4,
            modelo: "Camaro",
            year: "2022",
            precio: "590000"
        },
        {
            id: 5,
            modelo: "Mercedes S63",
            year: "2022",
            precio: "500000"
        },
        {
            id: 6,
            modelo: "Sentra",
            year: "2022",
            precio: "590000"
        },
        {
            id: 7,
            modelo: "Jetta",
            year: "2022",
            precio: "590000"
        },
        {
            id: 8,
            modelo: "Fortuner",
            year: "2022",
            precio: "600000"
        },
        {
            id: 9,
            modelo: "Hillux",
            year: "2022",
            precio: "500000"
        },
        {
            id: 10,
            modelo: "Tiguan",
            year: "2022",
            precio: "590000"
        }
    ]);

    function deleteTest(id) {
        setMerch(merchs.filter(merch => merch.id !== id))
    }

    function editTest(datos) {
        setMerch(merchs.map(merch => merch.id === datos.id ? datos : merch));
        handleClose();
    }

    function dataTransfer(datos) {
        handleShow();
        setRegistroEdit(datos);
    }


    return (
        <>
            <Container fluid>
                <caption align="center">Mercancía</caption>
                <Table striped bordered hover variant="ligth"
                    style={{
                        background: "#a5edff",
                        borderColor: "gray"
                    }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Modelo</th>
                            <th>Año</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody style={{ justifyContent: "center" }}>
                        {
                            merchs.map((merch, i) => {
                                return <tr>
                                    <td>{merch.id}</td>
                                    <td>{merch.modelo}</td>
                                    <td>{merch.year}</td>
                                    <td>{merch.precio}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteTest(merch.id)}>Borrar</button></td>
                                    <td><button className="btn btn-primary" onClick={() => dataTransfer(merch)}>Editar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <MerchEdit show={show} handleClose={handleClose} editTest={editTest} registroEdit={registroEdit} />
            </Container>
        </>
    );
}