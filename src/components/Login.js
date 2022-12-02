import React, { useState } from 'react';
import { Container,Form } from 'react-bootstrap';

const Login = () => {
    //login
    const [modalLogin, setModalLogin] = useState({
        email: '',
        password: '',
        flag: false
    });
    const onChangeLogin = (e) => {
        e.persist();
        setModalLogin({ ...modalLogin, [e.target.name]: e.target.value });
    };
    return (
        <Container>
            <Form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Form.Label><h4>Inicia sesión con tu correo y contraseña</h4></Form.Label>
                <Form.Group className="mb-3" controlId="modalEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Ej. Electricar@gmail.com"
                        autoFocus
                        name="email"
                        value={modalLogin.email}
                        onChange={onChangeLogin}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        maxLength="12"
                        minLength={8}
                        placeholder="Ingresa tu contraseña"
                        name="password"
                        value={modalLogin.password}
                        onChange={onChangeLogin}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Login;