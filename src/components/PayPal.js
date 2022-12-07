import React,{useState} from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Container } from 'react-bootstrap'; import "../css-components/home-product.css";

export default function Paypal() {
  const [pago, setPago]=useState({pagan: sessionStorage.getItem("totalPP")});

  (async function cargar() {
    pago.pagan=sessionStorage.getItem("totalPP");
})();

  return (
    <Container fluid>
      <PayPalScriptProvider options={{ "client-id": "ATopRVi_zcgIG4KmDjOQUzpKCm2yqwnNN4Zcon2ETEwWn2Q95xtM7SYeIHxuDUeusD_6GRxnFy6AMPhS" }}>
        <PayPalButtons 
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: pago.pagan,
                  },
                },
              ],
            });
          }}
        />;
      </PayPalScriptProvider>

    </Container>
  );
}
Paypal.defaultProps ={
  total: '0'
  }