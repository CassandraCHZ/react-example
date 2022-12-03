import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
    //login
    const navigate = useNavigate();

    const [Login, setLogin] = useState({
        email: '',
        password: '',
        flag: false
    });

    const onChangeLogin = (e) => {
        e.persist();
        setLogin({ ...Login, [e.target.name]: e.target.value });
    };

    const click = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        navigate('/react-example/Home');
    };

    const clickRegister = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        navigate('/react-example/Register');
    };

    return (
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Col>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img alt='InicioSesion' title='InicioSesion' src="/react-example/Images/User.gif"></img>
                </Col>
                <Col md="5">
                    <Form onSubmit={click}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Form.Label><h4>Inicia sesión con tu correo y contraseña</h4></Form.Label>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label style={{ fontSize: '21px' }}>Correo</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                minLength={5}
                                placeholder="Ej. Electricar@gmail.com"
                                autoFocus
                                name="email"
                                value={Login.email}
                                onChange={onChangeLogin}
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
                                value={Login.password}
                                onChange={onChangeLogin}
                            />
                        </Form.Group>
                        <br></br>
                        <Button className='buttonSeeProducts' type='submit'> Iniciar sesión </Button>
                        <br></br>
                        <br></br>
                        <Button className='buttonSeeProducts' onClick={clickRegister}> No tengo una cuenta </Button>
                    </Form>
                </Col>

            </Row>

        </Container>
    );
}

export default Login;