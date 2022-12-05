import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Row, Col, Modal, Form } from 'react-bootstrap';


function Example(props) {
    //const [show, setShow] = useState(false);
    // const [valores, setValores] = useState({
    //     nombre: "",
    //     apellido: "",
    //     email: "",
    //     contraseña: "",
    //     fechaNacimiento: ""
    // });

    const [valores, setValores] = useState(props.registroEdit);

    useEffect(() => {
        setValores(props.registroEdit);
    }, [props.registroEdit]);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    console.log(props);

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={valores?.nombre} onChange={(e)=>setValores({...valores, nombre: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="apelli">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" value={valores?.apellidos} onChange={(e)=>setValores({...valores, apellidos: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="Correo" value={valores?.email} onChange={(e)=>setValores({...valores, email: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordId">
                        <Form.Label>Contraseñña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" value={valores?.contraseña} onChange={(e)=>setValores({...valores, contraseña: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="BirthDate">
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control type="text" placeholder="Fecha de Nacimiento" value={valores?.fechaNacimiento} onChange={(e)=>setValores({...valores, fechaNacimiento: e.target.value})}/>
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>props.editTest(valores)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example