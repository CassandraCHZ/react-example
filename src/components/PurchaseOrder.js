import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Modal, Table } from 'react-bootstrap';
import POmarque from './POmarque';
import POtable from './POtable';

//style
import "../css-components/contact-style.css";

export default function Purchase() {
    const [Contacto, setContacto] = useState({
        mensaje: ''
    });

    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const onChange = (e) => {
        e.persist();
        setContacto({ ...Contacto, [e.target.name]: e.target.value });
    };

    const sendMessage = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();
        Contacto.mensaje = "";
    }
    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <Row style={{ justifyContent: 'left' }} >
                <Col xs lg={5} >
                    <br></br>
                    <POmarque/>
                </Col>
                <Col md="auto" lg={7} >
                    <br></br>
                    <br></br>
                    <div style={{ textAlign: 'left' }}>
                        <h1>Ordenes de Compra</h1>
                        <h5><b>Aquí están tus pedidos desde la creacion de tu cuenta.</b></h5>
                    </div>
                    <POtable></POtable>

                </Col>
            </Row>

            <Modal show={showAlert} onHide={alertClose}>
                <Modal.Header style={{
                    background: "#a5edff"
                }} closeButton>
                    <Modal.Title>Mensaje enviado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Agradecemos todos tus comentarios. Responderemos a la mayor brevedad posible.</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

        </Container >
    );
}