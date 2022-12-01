import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'

//'linear-gradient(#AADEE0, #FFFFFF)' #0044FF"

const Navigation = () => {
    return (
        <div clas="container-fluid">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark"
                style={{ background: 'linear-gradient(#ebf4fa, #FFFFFF)' }}>
                <Container >
                    <Navbar.Brand as={Link} to="/react-example/Home" title="Logo"> 
                        <img src="/react-example/Images/carro.png" title="Logo" alt="Logo del proyecto" width="50" height="44" />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/react-example/Home" title="Electricar"><h4 style={{ color: "#006655" }} >Electricar</h4></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/react-example/Home" title="Bienvenida"><h4 style={{ color: "#006655" }} >Bienvenida</h4></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/react-example/Login" title="Inicio sesión"><h4 style={{ color: "#006655" }} >Inicio sesión</h4></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/react-example/Carrito" title="Carrito"><h4 style={{ color: "#006655" }} >Carrito</h4></Navbar.Brand>
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