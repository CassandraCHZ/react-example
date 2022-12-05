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

    const [Usuario3, setUsuario3] = useState({
        nombre: "Juan Carlos",
        apellidos: "Sánchez Gaytán",
        email: "negocios1@hotmail.com",
        contraseña: "6hr6w26frwqnmg",
        fechaNacimiento: "02/02/2002"
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
                    <tr id="fila0">
                        <td>1</td>
                        <td>{Usuario1.nombre}</td>
                        <td>{Usuario1.apellidos}</td>
                        <td>{Usuario1.email}</td>
                        <td>{Usuario1.contraseña}</td>
                        <td>{Usuario1.fechaNacimiento}</td>
                        <td><input type="button" class="btn btn-danger" value="Eliminar" /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{Usuario2.nombre}</td>
                        <td>{Usuario2.apellidos}</td>
                        <td>{Usuario2.email}</td>
                        <td>{Usuario2.contraseña}</td>
                        <td>{Usuario2.fechaNacimiento}</td>
                        <td><input onClick="delete()" type="button" class="btn btn-danger" value="Eliminar" /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{Usuario3.nombre}</td>
                        <td>{Usuario3.apellidos}</td>
                        <td>{Usuario3.email}</td>
                        <td>{Usuario3.contraseña}</td>
                        <td>{Usuario3.fechaNacimiento}</td>
                        <td><input type="button" class="btn btn-danger" value="Eliminar" /></td>
                    </tr>
                </tbody>
            </Table>
            <script>
                function eliminar() {
                    
                }
            </script>
        </>
    );
}