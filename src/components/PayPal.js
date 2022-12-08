import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Container } from 'react-bootstrap'; import "../css-components/home-product.css";

export default function Paypal() {
  const [pago, setPago] = useState({ pagan: sessionStorage.getItem("totalPP") });

  (async function cargar() {
    pago.pagan = sessionStorage.getItem("totalPP");
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
          onApprove={() => {
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var fechaV = day.toString() + "-" + month.toString() + "-" + year.toString();
            var generateId = Math.random().toString(36).substr(2, 18);
            var products = JSON.parse(localStorage.getItem("miCarrito"));

            const orden = { codigo: generateId, fecha: fechaV, precio: pago.pagan,factura:"No", metodo: "PayPal", status: "En proceso", productos: [products] };
            console.log("codigo:" + generateId + " fecha:" + fechaV + " primer producto:" + products[0].modelo + "orden:" + orden.status);
            var ordenes = JSON.parse(sessionStorage.getItem('ordenesDeCompra'));
            ordenes.push(orden);
            sessionStorage.setItem('ordenesDeCompra', JSON.stringify(ordenes));
          }
          }
        />;
      </PayPalScriptProvider>

    </Container>
  );
}
Paypal.defaultProps = {
  total: '0'
}