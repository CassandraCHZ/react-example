import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Autos from "../autos.json";
import Usuarios from "../usuarios.json";
//style

export default function Admin() {

    const [usuarios, setUsuarios] = useState(
        Usuarios.usuarios
    )

    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);


    const sendMessage = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();

    }

    const [Usuario1, setUsuario1] = useState({
        nombre: "Saúl",
        apellidos: "Mascorro Luévano",
        email: "smascorro2001@gmail.com",
        contraseña: "1dsa483dt4",
        fechaNacimiento: "23/09/2001",
    })

    const [Usuario2, setUsuario2] = useState({
        nombre: "Luis Fernand0",
        apellidos: "Gutiérrez Hernández",
        email: "luisGH2001@gmail.com",
        contraseña: "789dshj9h5g",
        fechaNacimiento: "01/01/2001",
    })

    const [Usuario3, setUsuario3] = useState({
        nombre: "Juan Carlos",
        apellidos: "Sánchez Gaytán",
        email: "negocios1@hotmail.com",
        contraseña: "6hr6w26frwqnmg",
        fechaNacimiento: "02/02/2002",
    })

    return (
        <Container>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Electricar</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Dashboard menú</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to = "Usuarios">
                                        Usuarios
                                    </Link>
                                    <a href="#usuarios" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Usuarios</span></a>
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
                                </li>
                                <li>
                                    <a href="#productos" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Productos</span></a>
                                </li>
                                <li>
                                    <a href="#categoria" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Categorías</span> </a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col py-3">
                        Content area...
                    </div>
                </div>
            </div>
        </Container>
    );
}