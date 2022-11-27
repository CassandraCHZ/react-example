import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid>
            <footer>
                <div class="container pt-5 border-bottom">
                    <div class="row text-center">
                        <div style="text-align: center;">
                            <marquee direction="left" SCROLLDELAY="30">
                                <img src="Images/carro.png" title="Logo" alt="Logo del Proyecto" width="130" height="118" />
                            </marquee>
                        </div>
                        <h4 class="mb-4 font-weight-bold text-uppercase">Contactos</h4>
                        <ul class="list-group">
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                                <a href="https://www.google.com/intl/es-419/gmail/about/" title="gmail" target="_blank"
                                    style="margin-right:35px;">
                                    <img src="Images/gmail.png" title="Gmail" alt="Gmail" width="45" height="45" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100087754681331" title="facebook" target="_blank">
                                    <img src="Images/facebook.png" title="Facebook" alt="Facebook" width="45" height="45" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <h4 style="text-align: center; margin-top: 15px;">¿Quiénes somos?</h4>
                <p style="text-align: center; margin-left: 300px; margin-right: 300px; margin-bottom: 20px;">Somos un negocio electrónico especializado en la venta de carros modificados con motores eléctricos, los cuales
                    ofrecen una autonomía de 250 kilómetros, además visto desde el cuidado del ambiente, estos vehículos generan menos emisiones de CO2.
                </p>
                <ul class="list-group" style="text-align: center;">
                    <li class="list-group-item bg-transparent border-0 p-0 mb-2" style="font-size: 20px;">
                        <img src="Images/Cookie.png" title="cookie" alt="cookie" width="35" height="35" />
                        <a href="http://www.google.com/intl/es-419/policies/technologies/types/" title="gmail" target="_blank"><i
                            class="fa fa-google-plus mr-1"></i>Cookies</a>

                    </li>
                </ul>
                <br></br>
            </footer>
        </Container >
    );

}

export default Footer;