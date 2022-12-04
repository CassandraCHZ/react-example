import React, { useState } from 'react';
import { Container, Form, Button, Row, Col,Modal } from 'react-bootstrap';

//style
import "../css-components/contact-style.css";

export default function Admin(){
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

    const sendMessage=(e)=>{
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();
        Contacto.mensaje="";
    }
    return (
        <Container>
            <Row style={{ justifyContent: 'left' }} >
                <Col >
                    <br></br>
                    <img
                        width="100%"
                        height="100%"
                        alt='GMAIL'
                        title='GMAIL'
                        src="/react-example/Images/Contact_image.gif">
                    </img>
                </Col>

                <Col md={5}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Panel de Administración</h1>
                    <h5>Estimado usuario, dejamos a tu disposición este canal de comunicación, para que puedas comunicarte con nosotros.</h5>
                </Col>
            </Row>

            <Modal show={showAlert} onHide={alertClose}>
        <Modal.Header style={{
            background:"#a5edff"
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

        </Container>
    );
}