import React, { useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer, Table, Modal, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
//json file
import Autos from "../autos.json";

const ProductCard = () => {
    const location = useLocation();

    const [auto_id, setAuto_id] = useState(location?.state?.autoID ?? 2);
    const auto = Autos.autos.find(carro => carro.id === (auto_id));
    // const auto=Autos.autos.find(carro => carro.id === (location.state.autoID));

    const click = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        modalClose();
    };


    const [position, setPosition] = useState('bottom-center');

    const [showToastC, setShowToastC] = useState(false);
    const toastCloseC = () => setShowToastC(false);
    const toastShowC = () => {
        setShowToastC(true);
        var carr = JSON.parse(localStorage.getItem('miCarrito'));
        const objWithIdIndex = carr.findIndex((ca) => ca.id === auto.id);
        if (objWithIdIndex == -1) {
            const pCarr = { id: auto.id, modelo: auto.modelo, imagen: auto.imagen, year: auto.year, precio: auto.precio };
            carr.push(pCarr);
            localStorage.setItem('miCarrito', JSON.stringify(carr));
        }
    }

    const [showToastF, setShowToastF] = useState(false);
    const toastCloseF = () => setShowToastF(false);
    const toastShowF = () => {
        setShowToastF(true);
        var fav = JSON.parse(localStorage.getItem('misFavoritos'));
        const objWithIdIndex = fav.findIndex((fav) => fav.id === auto.id);
        if (objWithIdIndex == -1) {
            const pFav = { id: auto.id, modelo: auto.modelo, imagen: auto.imagen, year: auto.year, precio: auto.precio };
            fav.push(pFav);
            localStorage.setItem('misFavoritos', JSON.stringify(fav));
        }
    }

    const [show, setShow] = useState(false);
    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);


    return (

        <Container>
            <br /> <br /> <br /> <br />
            <h1 class="text-center">Vista del producto</h1>
            <br /> <br /> <br />
            {(location.state === null) ? <h1>No encontrado</h1>
                : <>
                    <Row style={{ textAlign: "left" }}>
                        <Col >
                            <br /> <br />  <br /> <br />
                            <img alt="ProductCard" title="ProductCar" src={auto.imagen} width={550}></img>
                        </Col>
                        <Col md="5" >
                            <h2>{auto.modelo}</h2>
                            <h5 style={{ color: "#5664DE" }}>$ {auto.precio} MXN</h5>
                            <h5>Precio con IVA: $ {auto.precio * 1.16} MXN</h5>
                            <h5 style={{ textAlign: "justify" }}>{auto.descripcion}</h5>
                            <h4 style={{ textAlign: "center" }}>Caracter??sticas</h4>
                            <Row>
                                <Col>
                                    <h5> Categor??a: {auto.categoria}</h5>
                                    <h5>   A??o: {auto.year} </h5>
                                    <h5>  Longitud: {auto.longitud}</h5>
                                    <h5>   Altura: {auto.altura}</h5>
                                    <h5>  Anchura: {auto.anchura}</h5>
                                </Col>
                                <Col md="5">
                                    <h5> Autonom??a: {auto.autonomia}</h5>
                                    <h5> Potencia: {auto.potencia}</h5>
                                    <h5> Transmisi??n: {auto.transmision}</h5>
                                    <h5> Marca: {auto.marca}</h5>
                                    <h5> Colores: {auto.colores}</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div style={{ textAlign: "center" }}>
                        <br />
                        <br />

                        <Button className='buttonSeeProducts' onClick={toastShowC}>A??adir al carrito</Button>

                        <img alt="Favoritos" title="Favoritos" src="/react-example/Images/Fav.png" width={45} style={{ paddingLeft: "15px", cursor: "pointer" }} onClick={toastShowF}></img>
                    </div>
                    <br />
                    <br />

                    <div>
                        <h4>Comentarios sobre: {auto.modelo}</h4>
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
                                    <td>Agrado mucho este carro porque cuenta con un motor el??ctrico que ayuda a no contaminar tanto como los normales.
                                        Adem??s, que cuenta con las mejores comodidades. ??Se los recomiendo!
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button className='buttonSeeProducts' onClick={modalShow} > Agregar comentario</Button>
                    </div>
                </>
            }


            <br />
            <br />
            <ToastContainer className="p-3" position={position}>
                <Toast show={showToastC} onClose={toastCloseC}>
                    <Toast.Header>
                        <strong className="me-auto">A??adir al carrito</strong>
                    </Toast.Header>
                    <Toast.Body>Se a??adi?? correctamente tu producto al carrito.</Toast.Body>
                </Toast>
            </ToastContainer>

            <ToastContainer className="p-3" position={position}>
                <Toast show={showToastF} onClose={toastCloseF}>
                    <Toast.Header>
                        <strong className="me-auto">A??adir a favoritos</strong>
                    </Toast.Header>
                    <Toast.Body>Se a??adi?? correctamente a tus favoritos.</Toast.Body>
                </Toast>
            </ToastContainer>

            <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresa tu comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Usuario: Julieta Romero</h5>
                    <textarea style={{ outline: "#DFEFEF Solid" }}
                        required
                        name="mensaje"
                        type="text"
                        maxLength="250"
                        minLength={15}
                        class="text-area-border" rows="5" cols="60"
                        placeholder="Escribe aqu??...">
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
