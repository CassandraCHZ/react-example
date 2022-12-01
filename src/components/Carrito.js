import React from 'react';
import { Container } from 'react-bootstrap';
import "../css-components/home-product.css";
import ReactDOM from "react-dom"
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

//json file
import Autos from "../autos.json";

class Carrito extends React.Component {
    createOrder(data, actions) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "105",
                    },
                },
            ],
        });
    }
    onApprove(data, actions) {
        return actions.order.capture();
    }
    //apartir de aqui van las funciones
    render() {
        return (
            <Container fluid>
                <br></br>
                <br></br>
                <br></br>
                <h1>Carrito</h1>
                
                <PayPalButton
                    createOrder={(data, actions) => this.createOrder(data, actions)}
                    onApprove={(data, actions) => this.onApprove(data, actions)}
                />
            </Container>

        );
    }
}

export default Carrito;
/*
var json_data = Autos;
var array = [];

for(var i in json_data)
    array.push([i, json_data [i]]);
    */