import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

//'linear-gradient(#AADEE0, #FFFFFF)' #0044FF"

const Navigation = () => {
    return (
        <div clas="container-fluid">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light"
                style={{ background: 'linear-gradient(#ebf4fa, #FFFFFF)' }}>
                <Container >
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/react-example/Home" title="Logo">
                        <img src="/react-example/Images/carro.png" title="Logo" alt="Logo del proyecto" width="50" height="44" />Electricar
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: "#006655" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand as={Link} to="/react-example/Catalog" title="Catalogo"><h4 style={{ color: "#006655" }} >Catálogo</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/AdminLogin" title="Administracion"><h4 style={{ color: "#006655" }} >Administración</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/Contact" title="Contacto"><h4 style={{ color: "#006655" }} >Contacto</h4></Navbar.Brand>

                        <Nav className="me-auto">
                            <NavDropdown title="Tu cuenta" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/react-example/UserProfile" title="Perfil">Perfil</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Login" title="Inicio sesión">Inicio sesión</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Home" title="Cerrar sesión">Cerrar sesión</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/PurchaseOrder" title="Orden de Compra">Órdenes de Compra</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/ShoppingCart" title="Carrito">Carrito</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
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