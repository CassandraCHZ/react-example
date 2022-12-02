import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
    const navigate = useNavigate();

    const [Register, setRegister] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        date_birth:'',
        flag: false
    });

    const onChangeRegister = (e) => {
        e.persist();
        setRegister({ ...Register, [e.target.name]: e.target.value });
    };

    const click = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        navigate('/react-example/Home');

    };

    return (
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Col md="5">

                    <Form onSubmit={click}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Form.Label><h4>Crear una cuenta</h4></Form.Label>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label style={{ fontSize: '21px' }}> Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                minLength={3}
                                placeholder="Ingresa tu nombre"
                                name="name"
                                value={Register.password}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3" controlId="last_name">
                            <Form.Label style={{ fontSize: '21px' }}>Apellidos</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                minLength={3}
                                placeholder="Ingresa tus apellidos "
                                name="last_name"
                                value={Register.last_name}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label style={{ fontSize: '21px' }}>Correo</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                minLength={5}
                                placeholder="Ej. Electricar@gmail.com"
                                autoFocus
                                name="email"
                                value={Register.email}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label style={{ fontSize: '21px' }}>Contraseña</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                maxLength="12"
                                minLength={8}
                                placeholder="Ingresa tu contraseña"
                                name="password"
                                value={Register.password}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3" controlId="date_birth">
                            <Form.Label style={{ fontSize: '21px' }}>Fecha de nacimineto</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                minLength={8}
                                placeholder="AAAA-MM-DD"
                                name="date_birth"
                                value={Register.date_birth}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label style={{ fontSize: '21px' }}>Dirección</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                minLength={7}
                                placeholder="Ej. Fray Luis de león #502 Santa Anita"
                                name="address"
                                value={Register.address}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        <br></br>
                        <Button className='buttonSeeProducts' type='submit'> Registrar </Button>
                        <br></br>
                        <br></br>
                    </Form>
                </Col>
                <Col> 
                <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <img alt='InicioSesion' title='InicioSesion' src="/react-example/Images/User.gif"></img>
                </Col>
            </Row>

        </Container>
    );
}

export default Register;