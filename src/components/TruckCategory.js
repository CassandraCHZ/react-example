import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';

export default function Producto() {

    const [Truck1] = useState({
        modelo: "Fortuner",
        descripcion: "Fortuner integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.",
    })

    const [Truck2] = useState({
        modelo: "Hillux",
        descripcion: "La Hilux ha ganado reputación por solidez y confiabilidad excepcionales, incluso durante uso y/o abuso sostenido, y es comúnmente referida como La Camioneta Indestructible"
    })

    const [Truck3] = useState({
        modelo: "Tiguan",
        descripcion: "Te presentamos Nuevo Tiguan, el SUVW que reúne todo lo que tú y tu familia necesitan en seguridad, tecnología y entretenimiento para todos los trayectos juntos.",
    })

    return (
        <>
            <caption align="center">Caminetones</caption>
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
                    <tr>
                        <td>1</td>
                        <td>{Truck1.modelo}</td>
                        <td>{Truck1.descripcion}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{Truck2.modelo}</td>
                        <td>{Truck2.descripcion}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{Truck3.modelo}</td>
                        <td>{Truck3.descripcion}</td>
                    </tr>
                </tbody>
            </Table>
            
        </>
    );
}