import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div clas="container-fluid">
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#e3f2fd" }}>
                <Container >
                    <Navbar.Brand as={Link} to="/react-example/Home"><h4 style={{color:"#000080"}} >Bienvenida</h4></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/react-example/Login"><h4 style={{color:"#0AA5AD"}} >Inicio sesión</h4></Navbar.Brand>
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