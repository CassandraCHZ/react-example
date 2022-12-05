import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import ProductEdit from './ProductEdit'

export default function Producto() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [trucks, setTruck] = useState([
        {
            id: 1,
            modelo: "Fortuner",
            descripcion: "Fortuner integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.",
        },
        {
            id: 2,
            modelo: "Hillux",
            descripcion: "La Hilux ha ganado reputación por solidez y confiabilidad excepcionales, incluso durante uso y/o abuso sostenido, y es comúnmente referida como La Camioneta Indestructible"
        },
        {
            id: 3,
            modelo: "Tiguan",
            descripcion: "Te presentamos Nuevo Tiguan, el SUVW que reúne todo lo que tú y tu familia necesitan en seguridad, tecnología y entretenimiento para todos los trayectos juntos.",
        }
    ]);

    function deleteTest(id){
        setTruck(trucks.filter(truck=>truck.id!==id))
    }

    function editTest(datos){
        setTruck(trucks.map(truck=>truck.id===datos.id ? datos : truck));
        handleClose();
    }

    function dataTransfer(datos){
        handleShow();
        setRegistroEdit(datos);
    }

    
    return (
        <>
            <caption align="center">Camionetones</caption>
            <Table striped bordered hover variant="ligth"
                style={{
                    background: "#a5edff",
                    borderColor: "gray"
                }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Modelo</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    {
                        trucks.map((truck, i) => {
                            return <tr>
                                <td>{truck.id}</td>
                                <td>{truck.modelo}</td>
                                <td>{truck.descripcion}</td>
                                <td><button className="btn btn-danger" onClick={()=>deleteTest(truck.id)}>Borrar</button></td>
                                <td><button className="btn btn-primary" onClick={() => dataTransfer(truck)}>Editar</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <ProductEdit show={show} handleClose={handleClose} editTest={editTest} registroEdit={registroEdit}/>
        </>
    );
}