import React, { useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer, Table, Modal, Form } from 'react-bootstrap';
//json file
import Autos from "../autos.json";

const ProductCard = () => {
    
    const click = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        modalClose();
    };

    const [Car, setCar] = useState(
        Autos.autos
    )

    const [position, setPosition] = useState('bottom-center');

    const [showToastC, setShowToastC] = useState(false);
    const toastCloseC = () => setShowToastC(false);
    const toastShowC = () => setShowToastC(true);

    const [showToastF, setShowToastF] = useState(false);
    const toastCloseF = () => setShowToastF(false);
    const toastShowF = () => setShowToastF(true);

    const [show, setShow] = useState(false);
    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);


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
                    <h5 style={{ textAlign: "justify" }}>{Car[0].descripcion}</h5>
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

                <img alt="Favoritos" title="Favoritos" src="/react-example/Images/Fav.png" width={45} style={{ paddingLeft: "15px" }} onClick={toastShowF}></img>
            </div>
            <br />
            <br />

            <div>
                <h4>Comentarios</h4>
                <Table style={{ backgroundColor: "#E7F7F7" }}>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Comentario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Julieta Romero</td>
                            <td>Agrado mucho este carro porque cuenta con un motor eléctrico que ayuda a no contaminar tanto como los normales.
                                Además, que cuenta con las mejores comodidades. ¡Se los recomiendo!
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Button className='buttonSeeProducts' onClick={modalShow} > Agregar comentario</Button>
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

            <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresa tu comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Usuario: Julieta Romero</h5>
                    <textarea style={{outline: "#DFEFEF Solid"}}
                                required
                                name="mensaje"
                                type="text"
                                maxLength="250"
                                minLength={15}
                                class="text-area-border" rows="5" cols="60"
                                placeholder="Escribe aquí...">
                            </textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={modalClose} >
                        Cancelar
                    </Button>
                    <Button variant="outline-primary" onClick={click}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>
    );
}

export default ProductCard;
