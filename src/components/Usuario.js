import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';

export default function Usuario() {

    const [users, setUser] = useState([
        {
            id: 1,
            nombre: "Juan Carlos",
            apellidos: "Sánchez Gaytán",
            email: "negocios1@hotmail.com",
            contraseña: "6hr6w26frwqnmg",
            fechaNacimiento: "02/02/2002"
        },
        {
            id: 2,
            nombre: "Luis Fernando",
            apellidos: "Gutiérrez Hernández",
            email: "luisGH2001@gmail.com",
            contraseña: "789dshj9h5g",
            fechaNacimiento: "01/01/2001"
        },
        {
            id: 3,
            nombre: "Saúl",
            apellidos: "Mascorro Luévano",
            email: "smascorro2001@gmail.com",
            contraseña: "1dsa483dt4",
            fechaNacimiento: "23/09/2001",
            descripcion: "Te presentamos Nuevo Tiguan, el SUVW que reúne todo lo que tú y tu familia necesitan en seguridad, tecnología y entretenimiento para todos los trayectos juntos.",
        }
    ]);

    function deleteTest(id){
        setUser(users.filter(user=>user.id!==id))
    }

    function editTest(id, datos){
        setUser(users.map(user=>user.id===id ? datos : user))
    }


    return (
        <>
            <caption align="center">Usuarios</caption>
            <Table striped bordered hover variant="ligth"
                style={{
                    background: "#a5edff",
                    borderColor: "gray"
                }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo electrónico</th>
                        <th>Contraseña</th>
                        <th>Fecha de Nacimiento</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    {
                        users.map((user, i) => {
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.nombre}</td>
                                <td>{user.apellidos}</td>
                                <td>{user.email}</td>
                                <td>{user.contraseña}</td>
                                <td>{user.fechaNacimiento}</td>
                                <td><button onClick={() => deleteTest(user.id)}>Eliminar</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}