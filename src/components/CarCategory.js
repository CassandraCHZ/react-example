import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';

export default function Producto() {

    const [Coche1] = useState({
        modelo: "Mercedes A3",
        descripcion: "El Mercedes Clase A es el compacto por excelencia de la marca alemana. En su cuarta generación nos encontramos con un vehículo con una imagen nueva, moderna y más tecnológica. El Clase A mejora en espacio a bordo y calidad de sus materiales. El diseño del nuevo Clase A es una clara evolución del diseño anterior. Las mismas formas adaptadas con los últimos matices estéticos de la marca, dotando de un gran protagonismo a sus ópticas, que siguen el camino trazado por el nuevo Mercedes CLS."
    })

    const [Coche2] = useState({
        modelo: "Corolla",
        year: "2022",
        descripcion: "El Toyota Corolla se caracteriza por ser un coche que ha acercado la tecnología híbrida al común de los conductores con un buen diseño, calidad interior, eficiencia, bajos consumos y un precio razonable. Es uno de los autos insignia de la marca y uno de los referentes en el segmento de los compactos, con una gran popularidad en todo el mundo que viene gracias a la durabilidad, desempeño y calidad.000"
    })

    const [Coche3] = useState({
        modelo: "Audi A3",
        descripcion: "El Audi A3 es un automóvil del segmento C producido por el fabricante alemán Audi. El diseño del Audi A3 Sportback es deportivo y agresivo en todas sus vistas. Basado en la plataforma modular MQB, ya empleada por el A3 de tercera generación, el A3 Sportback evoluciona su receta con mínimos cambios en tanto a sus medidas. ",
    })

    const [Coche4] = useState({
        modelo: "Camaro",
        descripcion: "Chevrolet Camaro es un icono de deportividad, aerodinámico y alto desempeño, creado para los amantes del performance y la velocidad. El selector de modos de manejo te permite elegir entre modo deportivo, turismo, nieve/hielo y pista, y así personalizar tu experiencia de conducción.",
    })

    const [Coche5] = useState({
        modelo: "Mercedes S63",
        descripcion: "El Mercedes-Benz S63 AMG es el menor de los S-AMG y tiene algunas cosas en común con el E63 AMG. Es uno de los coches que lleva el V8 atmosférico más potente del mundo y no lleva el V12 Biturbo del S65."
    })

    const [Coche6] = useState({
        modelo: "Sentra",
        descripcion: "Nissan SENTRA integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.",
    })

    const [Coche7] = useState({
        modelo: "Jetta",
        descripcion: "Nuevo Jetta es el acompañante perfecto para llenar tu vida de momentos emocionantes, hazlos aún más increíbles con la potencia que ofrece el eficiente Motor 1.4 L TSI con 150 Hp y 250 Nm.",
    })

    return (
        <>
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
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    <tr>
                        <td>1</td>
                        <td>{Coche1.modelo}</td>
                        <td>{Coche1.descripcion}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{Coche2.modelo}</td>
                        <td>{Coche2.descripcion}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{Coche3.modelo}</td>
                        <td>{Coche3.descripcion}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{Coche4.modelo}</td>
                        <td>{Coche4.descripcion}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{Coche5.modelo}</td>
                        <td>{Coche5.descripcion}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{Coche6.modelo}</td>
                        <td>{Coche6.descripcion}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{Coche7.modelo}</td>
                        <td>{Coche7.descripcion}</td>
                    </tr>
                </tbody>
            </Table>
            
        </>
    );
}