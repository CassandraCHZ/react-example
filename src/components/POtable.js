import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
export default function POtable() {
    return (
        <Table striped bordered hover variant="ligth"
            style={{
                background: "#a5edff",
                borderColor: "#006655"
            }}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>a</td>
                    <td>2</td>
                    <td>g</td>
                    <td><Button variant="danger" > Eliminar </Button></td>
                </tr>
            </tbody>
        </Table>
    );
}