import React, { useEffect, useState } from 'react';
import { Container, Card, Button, CardGroup, Row, Col, Table, InputGroup, Form, CloseButton } from 'react-bootstrap'; import "../css-components/home-product.css";
import { useNavigate } from 'react-router-dom';
import Autos from "../autos.json";


function Favorites() {

    const navigate = useNavigate();

    const [carros, setCarros] = useState(JSON.parse(localStorage.getItem('misFavoritos')));

    function removeObjectWithId(arr, id) {
        // Making a copy with the Array from() method
        const arrCopy = Array.from(carros);
        const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === id);
        arrCopy.splice(objWithIdIndex, 1);
        setCarros(arrCopy);
        //local storage delete record
        var fav = JSON.parse(localStorage.getItem('misFavoritos'));
        localStorage.setItem('misFavoritos', JSON.stringify(fav.filter(user => user.id !== id)));
        return arrCopy;
    }

    return (
        <Container fluid>
            <br></br>
            <br></br>
            <br></br> <br></br>
            <h1>Mis favoritos</h1>
            <br></br>
            <br />
            <Row>
                <Col md="auto" lg={8}>
                    {
                        carros.map(producto => {
                            return (
                                <Table style={{ textAlign: "center" }}>
                                    <tbody>
                                        <tr>
                                            <td><img
                                                width="220 px"
                                                height="120 px"
                                                src={producto.imagen}
                                                title="Producto"
                                                alt="Producto" />
                                            </td>

                                            <td><b>{producto.modelo}
                                                <br />{producto.year}
                                                <br />${producto.precio} mxn
                                            </b>
                                            </td>

                                            <td>
                                                <Button className='buttonSeeProducts' onClick={() => {
                                                    //console.log(auto.id);
                                                    navigate('/react-example/ProductCard', { state: { autoID: producto.id } });
                                                }}> Ver producto</Button>
                                            </td>

                                            <td>
                                                <InputGroup className="mb-3">
                                                    <img alt="Favoritos" title="Favoritos" src="/react-example/Images/fav_eliminar.png" width={45} style={{ paddingLeft: "15px", cursor: "pointer" }} onClick={() => {
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
                </Col>

                <Col xs lg={4}>
                    <img src="/react-example/Images/Favorites.gif" title="Favoritos" alt="Favoritos" width={400} />
                </Col>
            </Row>

        </Container>
    );
}
export default Favorites;