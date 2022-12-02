import React, { useState } from 'react';
import { Container,Form, Button } from 'react-bootstrap';

const Login = () => {
    //login
    const [Login, setLogin] = useState({
        email: '',
        password: '',
        flag: false
    });
    
    const onChangeLogin = (e) => {
        e.persist();
        setLogin({ ...Login, [e.target.name]: e.target.value });
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
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo</Form.Label>
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
                    <Form.Label>Contraseña</Form.Label>
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
            </Form>
            <br></br>
            <Button className='buttonSeeProducts'> Iniciar sesión </Button>
            <br></br>
            <br></br>
            <Button className='buttonSeeProducts'> No tengo una cuenta </Button>

        </Container>
    );
}

export default Login;