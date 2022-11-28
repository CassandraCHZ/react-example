import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../css-components/cookies-style.css";
import "../css-components/buttons-style.css";

const Cookies = () => {
    const [showAlert, setShowAlert] = useState(true);
    const alertClose = () => setShowAlert(false);
    return (
        <Modal show={showAlert} onHide={alertClose} >
            <Modal.Header closeButton style={{background: "#303333", color:"#FFFFFF"}}>
                <Modal.Title>Cookies de Electricar </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#303333", color:"#FFFFFF"}} >
                    <h6>Usamos cookies propias y de terceros que entre otras cosas recogen datos sobre sus hábitos de navegación para
                    mostrarle publicidad personalizada y realizar análisis de uso de nuestro sitio.
                    <br />
                    Si continúa navegando consideramos que acepta su uso.</h6>
            </Modal.Body>
            <Modal.Footer style={{background: "#303333", color:"#FFFFFF"}}>
                <Button variant="primary" className="bg-okay" onClick={alertClose} >Aceptar</Button>
                <Button variant="primary" className="bg-okay" onClick={alertClose} >Más información</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default Cookies;