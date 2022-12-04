import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'

//'linear-gradient(#AADEE0, #FFFFFF)' #0044FF"

const Navigation = () => {
    return (
        <div clas="container-fluid">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light"
                style={{ background: 'linear-gradient(#ebf4fa, #FFFFFF)' }}>
                <Container >
                    <Navbar.Brand  style={{ color: "#006655",fontSize:18+"pt" }} as={Link} to="/react-example/Home" title="Logo">
                        <img src="/react-example/Images/carro.png" title="Logo" alt="Logo del proyecto" width="50" height="44" />Electricar
                    </Navbar.Brand>
        
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:"#006655"}}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand as={Link} to="/react-example/Login" title="Inicio sesión"><h4 style={{ color: "#006655" }} >Inicio sesión</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/ShoppingCart" title="Carrito"><h4 style={{ color: "#006655" }} >Carrito</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/Administration" title="Administracion"><h4 style={{ color: "#006655" }} >Administración</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/ProductCard" title="Vista del Producto"><h4 style={{ color: "#006655" }} >Vista de Producto</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/Contact" title="Contacto"><h4 style={{ color: "#006655" }} >Contacto</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/PurchaseOrder" title="Order"><h4 style={{ color: "#006655" }} >Órdenes de Compra</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/Catalog" title="Order"><h4 style={{ color: "#006655" }} >Catálogo</h4></Navbar.Brand>

                    </Navbar.Collapse>


                    
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