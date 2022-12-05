import React, { useEffect, useState } from 'react';
import { Container, Card, Button, CardGroup, Row, Col, Table, InputGroup, Form, CloseButton } from 'react-bootstrap'; import "../css-components/home-product.css";

import Autos from "../autos.json";


function Favorites() {
    const [carros, setCarros] = useState([Autos.autos[0], Autos.autos[1], Autos.autos[2]]);
    const [total, settotal] = useState('');


    function removeObjectWithId(arr, id) {
        // Making a copy with the Array from() method
        const arrCopy = Array.from(carros);
        const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === id);
        arrCopy.splice(objWithIdIndex, 1);
        setCarros(arrCopy);
        return arrCopy;
    }

    return (
        <Container fluid>
            <br></br>
            <br></br>
            <br></br>
            <h1>Mis favoritos</h1>
            <br />
            {
                carros.map(producto => {
                    return (
                        <Table>
                            <tbody>
                                <tr>
                                    <td><img
                                        width="220 px"
                                        height="120 px"
                                        src={producto.imagen}
                                        title="Producto"
                                        alt="Producto" /></td>
                                    <td><b>{producto.modelo}
                                        <br />{producto.year}
                                        <br />${producto.precio} mxn
                                    </b></td>
                                    <td>
                                        <InputGroup className="mb-3">
                                            <img alt="Favoritos" title="Favoritos" src="/react-example/Images/Fav.png" width={45} style={{ paddingLeft: "15px" }} onClick={() => {
                                                                                                                                                                    console.log("HoLa" + producto.modelo);
                                                                                                                                                                    let car = carros.find(carro => carro.modelo === producto.modelo);
                                                                                                                                                                    console.log(car);
                                                                                                                                                                    const newArr = removeObjectWithId(carros, producto.id);
                                                                                                                                                                    }}></img>
                                        </InputGroup>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    );
                })
            }
        </Container>
    );
}
export default Favorites;