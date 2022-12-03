import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import POmarque from './POmarque';
import POtable from './POtable';

//style
import "../css-components/contact-style.css";

export default function Purchase() {

    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <Row style={{ justifyContent: 'left' }} >
                <Col xs lg={5} >
                    <br></br>
                    <POmarque/>
                </Col>
                <Col md="auto" lg={7} >
                    <br></br>
                    <br></br>
                    <div style={{ textAlign: 'left' }}>
                        <h1>Ordenes de Compra</h1>
                        <h5><b>Aquí están tus pedidos desde la creacion de tu cuenta.</b></h5>
                    </div>
                    <POtable></POtable>
                </Col>
            </Row>
        </Container >
    );
}