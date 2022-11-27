import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div clas="container-fluid">
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#65C2C2" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/react-example/Home">Bienvenida</Navbar.Brand>
                    <Navbar.Brand as={Link} to="/react-example/Login">Inicio sesión</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

export default Navigation;