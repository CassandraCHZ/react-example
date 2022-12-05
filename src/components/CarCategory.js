import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import CarEdit from './CarEdit';

export default function Producto() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cars, setCars] = useState([
        {
            id: 1,
            modelo: "Mercedes A3",
            descripcion: "El Mercedes Clase A es el compacto por excelencia de la marca alemana. En su cuarta generación nos encontramos con un vehículo con una imagen nueva, moderna y más tecnológica. El Clase A mejora en espacio a bordo y calidad de sus materiales. El diseño del nuevo Clase A es una clara evolución del diseño anterior. Las mismas formas adaptadas con los últimos matices estéticos de la marca, dotando de un gran protagonismo a sus ópticas, que siguen el camino trazado por el nuevo Mercedes CLS."
        },
        {
            id: 2,
            modelo: "Corolla",
            descripcion: "El Toyota Corolla se caracteriza por ser un coche que ha acercado la tecnología híbrida al común de los conductores con un buen diseño, calidad interior, eficiencia, bajos consumos y un precio razonable. Es uno de los autos insignia de la marca y uno de los referentes en el segmento de los compactos, con una gran popularidad en todo el mundo que viene gracias a la durabilidad, desempeño y calidad.000"
        },
        {
            id: 3,
            modelo: "Audi A3",
            descripcion: "El Audi A3 es un automóvil del segmento C producido por el fabricante alemán Audi. El diseño del Audi A3 Sportback es deportivo y agresivo en todas sus vistas. Basado en la plataforma modular MQB, ya empleada por el A3 de tercera generación, el A3 Sportback evoluciona su receta con mínimos cambios en tanto a sus medidas. ",
        },
        {
            id: 4,
            modelo: "Camaro",
            descripcion: "Chevrolet Camaro es un icono de deportividad, aerodinámico y alto desempeño, creado para los amantes del performance y la velocidad. El selector de modos de manejo te permite elegir entre modo deportivo, turismo, nieve/hielo y pista, y así personalizar tu experiencia de conducción.",
        },
        {
            id: 5,
            modelo: "Mercedes S63",
            descripcion: "El Mercedes-Benz S63 AMG es el menor de los S-AMG y tiene algunas cosas en común con el E63 AMG. Es uno de los coches que lleva el V8 atmosférico más potente del mundo y no lleva el V12 Biturbo del S65."
        },
        {
            id: 6,
            modelo: "Sentra",
            descripcion: "Nissan SENTRA integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.",
        },
        {
            id: 7,
            modelo: "Jetta",
            descripcion: "Nuevo Jetta es el acompañante perfecto para llenar tu vida de momentos emocionantes, hazlos aún más increíbles con la potencia que ofrece el eficiente Motor 1.4 L TSI con 150 Hp y 250 Nm.",
        }
    ]);


    function deleteTest(id) {
        setCars(cars.filter(car => car.id !== id))
    }

    function editTest(datos) {
        setCars(cars.map(car => car.id === datos.id ? datos : car));
        handleClose();
    }

    function dataTransfer(datos) {
        handleShow();
        setRegistroEdit(datos);
    }

    return (
        <>
            <Container fluid>
                <caption align="center">Autos</caption>
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
                            cars.map((car, i) => {
                                return <tr>
                                    <td>{car.id}</td>
                                    <td>{car.modelo}</td>
                                    <td>{car.descripcion}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteTest(car.id)}>Borrar</button></td>
                                    <td><button className="btn btn-primary" onClick={() => dataTransfer(car)}>Editar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <CarEdit show={show} handleClose={handleClose} editTest={editTest} registroEdit={registroEdit} />
            </Container>
        </>
    );
}