import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
//json file
import Autos from "../autos.json";

const ProductCard = () => {

    const [Car, setCar] = useState(
        Autos.autos
    )

    
    const [showToastC, setShowToastC] = useState(false);
    const toastCloseC = () => setShowToastC(false);
    const toastShowC = () => setShowToastC(true);

    const [showToastF, setShowToastF] = useState(false);
    const toastCloseF = () => setShowToastF(false);
    const toastShowF = () => setShowToastF(true);

    const [position, setPosition] = useState('bottom-center');

    return (
        <Container>
            <br /> <br /> <br /> <br />
            <h1 class="text-center">Vista del producto</h1>
            <br /> <br /> <br />
            <Row style={{ textAlign: "left" }}>
                <Col >
                    <br /> <br />  <br /> <br />
                    <img alt="ProductCard" title="ProductCar" src={Car[0].imagen} width={550}></img>
                </Col>
                <Col md="5" >
                    <h2 >{Car[0].modelo} </h2>
                    <h5 style={{ color: "#5664DE" }}>$ {Car[0].precio} MXN</h5>
                    <h5>Precio con IVA: $ {Car[0].precio * 1.16} MXN</h5>
                    <h5>{Car[0].descripcion}</h5>
                    <h4 style={{ textAlign: "center" }}>Características</h4>
                    <Row>
                        <Col>
                            <h5> Categoría: {Car[0].categoria}</h5>
                            <h5>   Año: {Car[0].year} </h5>
                            <h5>  Longitud: {Car[0].longitud}</h5>
                            <h5>   Altura: {Car[0].altura}</h5>
                            <h5>  Anchura: {Car[0].anchura}</h5>
                        </Col>
                        <Col md="5">
                            <h5> Autonomía: {Car[0].autonomia}</h5>
                            <h5> Potencia: {Car[0].potencia}</h5>
                            <h5> Transmisión: {Car[0].transmision}</h5>
                            <h5> Marca: {Car[0].marca}</h5>
                            <h5> Colores: {Car[0].colores}</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div style={{ textAlign: "center" }}>
                <h4>Cantidad</h4>
                <input type="number" id="tentacles" name="tentacles" min="1" max="100" style={{ padding: "10px", backgroundColor: "#E2EAEA", borderRadius: "10px" }} ></input>
                <br />
                <br />

                <Button className='buttonSeeProducts' onClick={toastShowC}>Añadir al carrito</Button>
                
                <img src="/react-example/Images/Fav.png" width={45} style={{ paddingLeft: "15px" }} onClick={toastShowF}></img>
            </div>
            <br />
            <br />

            <ToastContainer className="p-3" position={position}>
                <Toast show={showToastC} onClose={toastCloseC}>
                    <Toast.Header>
                        <strong className="me-auto">Añadir al carrito</strong>
                    </Toast.Header>
                    <Toast.Body>Se añadió correctamente tu producto al carrito.</Toast.Body>
                </Toast>
            </ToastContainer>

            <ToastContainer className="p-3" position={position}>
                <Toast show={showToastF} onClose={toastCloseF}>
                    <Toast.Header>
                        <strong className="me-auto">Añadir a tu lista de deseos</strong>
                    </Toast.Header>
                    <Toast.Body>Se añadió correctamente a tu lista de deseos.</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
}

export default ProductCard;
