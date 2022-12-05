import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';

export default function Producto() {

    const [Producto1] = useState({
        modelo: "Mercedes A3",
        year: "2022",
        precio: "590000"
    })

    const [Producto2] = useState({
        modelo: "Corolla",
        year: "2022",
        precio: "390000"
    })

    const [Producto3] = useState({
        modelo: "Audi A3",
        year: "2022",
        precio: "470000"
    })

    const [Producto4] = useState({
        modelo: "Camaro",
        year: "2022",
        precio: "590000"
    })

    const [Producto5] = useState({
        modelo: "Mercedes S63",
        year: "2022",
        precio: "500000"
    })

    const [Producto6] = useState({
        modelo: "Sentra",
        year: "2022",
        precio: "590000"
    })

    const [Producto7] = useState({
        modelo: "Fortuner",
        year: "2022",
        precio: "600000"
    })

    const [Producto8] = useState({
        modelo: "Toyota Hillux",
        year: "2022",
        precio: "500000"
    })

    const [Producto9] = useState({
        modelo: "Jetta",
        year: "2022",
        precio: "290000"
    })

    const [Producto10] = useState({
        modelo: "Tiguan",
        year: "2022",
        precio: "590000"
    })

    return (
        <>
            <caption align="center">Mercancía</caption>
            <Table striped bordered hover variant="ligth"
                style={{
                    background: "#a5edff",
                    borderColor: "gray"
                }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Modelo</th>
                        <th>Año</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    <tr>
                        <td>1</td>
                        <td>{Producto1.modelo}</td>
                        <td>{Producto1.year}</td>
                        <td>{Producto1.precio}</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{Producto2.modelo}</td>
                        <td>{Producto2.year}</td>
                        <td>{Producto2.precio}</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{Producto3.modelo}</td>
                        <td>{Producto3.year}</td>
                        <td>{Producto3.precio}</td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{Producto4.modelo}</td>
                        <td>{Producto4.year}</td>
                        <td>{Producto4.precio}</td>

                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{Producto5.modelo}</td>
                        <td>{Producto5.year}</td>
                        <td>{Producto5.precio}</td>

                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{Producto6.modelo}</td>
                        <td>{Producto6.year}</td>
                        <td>{Producto6.precio}</td>

                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{Producto7.modelo}</td>
                        <td>{Producto7.year}</td>
                        <td>{Producto7.precio}</td>

                    </tr>
                    <tr>
                        <td>8</td>
                        <td>{Producto8.modelo}</td>
                        <td>{Producto8.year}</td>
                        <td>{Producto8.precio}</td>

                    </tr>
                    <tr>
                        <td>9</td>
                        <td>{Producto9.modelo}</td>
                        <td>{Producto9.year}</td>
                        <td>{Producto9.precio}</td>

                    </tr>
                    <tr>
                        <td>10</td>
                        <td>{Producto10.modelo}</td>
                        <td>{Producto10.year}</td>
                        <td>{Producto10.precio}</td>

                    </tr>
                </tbody>
            </Table>

        </>
    );
}