/*
import React, { useEffect } from "react";
import axios from "axios";
import Autos from "../autos.json";
//https://www.youtube.com/watch?v=p_VS4l14p9A&t=2s

export default function PayPal() {

    function renderPaypalButton() {
        paypal.Buttons({
                createOrder: async () => {
                    try {
                        const response = await axios({
                            url: "http://localhost:8000/create-order",
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            data: Autos
                        })
                        return response.data.id
                    } catch (error) {
                        console.log(error);
                    }
                },
                onCancel: function (data) {
                    console.log("Compra cancelada");
                },
                onApprove: function (data, actions) {
                    console.log(data);
                    return actions.order.capture();
                },
            })
            .render("#paypal-button-container");
    }
    useEffect(() => {
        renderPaypalButton();
    }, []);
    return (
        <div>
            <div id="paypal-button-container"></div>
        </div>
    );
}
*/
import React from "react";
import ReactDOM from "react-dom"
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

class YourComponent extends React.Component {
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
  render() {
    return (
      <PayPalButton
        createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
      />
    );
  }
}
export default YourComponent;