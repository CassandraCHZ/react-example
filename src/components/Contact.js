import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
    const [Contacto, setContacto] = useState({
        mensaje: ''
    });

    const onChange = (e) => {
        e.persist();
        setContacto({ ...Contacto, [e.target.name]: e.target.value });
    };
    return (
        <Container>
            <Row style={{ justifyContent: 'left' }} >
                <Col >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img
                        width="100%"
                        height="100%"
                        alt='GMAIL'
                        title='GMAIL'
                        src="/react-example/Images/gmail_animation.gif">
                    </img>
                </Col>

                <Col md={5}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Contactanos</h1>
                    <h5>Estimado usuario, dejamos a tu disposición este canal de comunicación, para que puedas comunicarte con nosotros cuando gustes.</h5>
                    <Form style={{ textAlign: "left" }}>
                        <br></br>
                        <Form.Label><h4>Escríbenos...</h4></Form.Label>
                        <br></br>
                        <Form.Group className="mb-3">
                            <Form.Label>Para:</Form.Label>
                            <Form.Control placeholder="electricar19151653@gmail.com" disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                maxLength="250"
                                minLength={15}
                                placeholder="Escribe aquí..."
                                name="password"
                                value={Contacto.mensaje}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <br></br>
                        <Button className='buttonSeeProducts' type='submit'><h6>Enviar mensaje</h6>  </Button>
                        <br></br>
                    </Form>
                </Col>
                


            </Row>


        </Container>
    );
}

export default Contact;