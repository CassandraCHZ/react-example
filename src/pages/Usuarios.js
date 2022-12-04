import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Autos from "../autos.json";
import Usuarios from "../usuarios.json";

export default function Usuario() {
    return (
        <Container>
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
                        <th>Contraseña</th>
                        <th>Fecha de nacimiento</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>

                </tbody>
            </Table>
        </Container>
    )
}