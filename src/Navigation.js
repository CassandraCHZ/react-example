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
                            <NavDropdown title={<Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }}>Tu cuenta</Navbar.Brand>} id="nav-dropdown" >
                                <NavDropdown.Item as={Link} to="/react-example/UserProfile" title="Perfil" style={{ color: "#006655" }}><b>Perfil</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Login" title="Inicio sesión" style={{ color: "#006655" }}><b>Inicio sesión</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Home" title="Cerrar sesión" style={{ color: "#006655" }}><b>Cerrar sesión</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/PurchaseOrder" title="Orden de Compra" style={{ color: "#006655" }}><b>Órdenes de Compra</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/ShoppingCart" title="Carrito" style={{ color: "#006655" }}><b>Carrito</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Favorites" title="Favoritos" style={{ color: "#006655" }}><b>Favoritos</b></NavDropdown.Item>
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