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
                                <td><button onClick={()=>deleteTest(truck.id)}>Borrar</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

        </>
    );
}