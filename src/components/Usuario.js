import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';

export default function Usuario() {

    const [Usuario1, setUsuario1] = useState({
        nombre: "Saúl",
        apellidos: "Mascorro Luévano",
        email: "smascorro2001@gmail.com",
        contraseña: "1dsa483dt4",
        fechaNacimiento: "23/09/2001"
    })

    const [Usuario2, setUsuario2] = useState({
        nombre: "Luis Fernando",
        apellidos: "Gutiérrez Hernández",
        email: "luisGH2001@gmail.com",
        contraseña: "789dshj9h5g",
        fechaNacimiento: "01/01/2001"
    })
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
                        <th>email</th>
                        <th>contraseña</th>
                        <th>Fecha de Nacimiento</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    <tr>
                        <td>1</td>
                        <td>{Usuario1.nombre}</td>
                        <td>{Usuario1.apellidos}</td>
                        <td>{Usuario1.email}</td>
                        <td>{Usuario1.contraseña}</td>
                        <td>{Usuario1.fechaNacimiento}</td>
                    </tr>
                </tbody>
           </Table>
        </>
    );
}