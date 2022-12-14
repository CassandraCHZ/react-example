import React, { useState } from 'react';
import { Container, Form, Button, Row, Col,Modal } from 'react-bootstrap';

//style
import "../css-components/contact-style.css";

const Contact = () => {
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
                        src="/react-example/Images/Contact_Image.gif">
                    </img>
                </Col>

                <Col md={5}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Contáctanos</h1>
                    <h5>Estimado usuario, dejamos a tu disposición este canal de comunicación, para que puedas comunicarte con nosotros.
                        <br />Estamos a tu servicio 24/7.</h5>
                    <Form onSubmit={sendMessage} style={{ textAlign: "left" }}>
                        <br></br>
                        <Form.Label><h4>Escríbenos...</h4></Form.Label>
                        <br></br>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Para:</b></Form.Label>
                            <Form.Control placeholder="electricar19151653@gmail.com" disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label><b>Mensaje:</b></Form.Label>
                            <textarea
                                required
                                name="mensaje"
                                value={Contacto.mensaje}
                                onChange={onChange}
                                type="text"
                                maxLength="250"
                                minLength={15}
                                class="text-area-border" rows="5" cols="60"
                                placeholder="Escribe aquí...">
                            </textarea>
                        </Form.Group>
                        <Button className='buttonSeeProducts' type='submit'><h6>Enviar mensaje</h6>  </Button>
                        <br></br>
                    </Form>
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

export default Contact;