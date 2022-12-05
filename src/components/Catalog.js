import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "../css-components/home-product.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';



//json file
import Autos from "../autos.json";

const Catalog = () => {
    const navigate = useNavigate();

    const click = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        navigate('/react-example/ProductCard');
    };

    const [autosOriginales, setAutosOriginales] = useState(Autos.autos);

    const [autosTodos, setAutosTodos] = useState(Autos.autos);

    const [camionetas, setCamionetas] = useState([Autos.autos[6], Autos.autos[7], Autos.autos[9]]);

    const [automoviles, setAutomoviles] = useState([Autos.autos[0], Autos.autos[1], Autos.autos[2], Autos.autos[3], Autos.autos[4], Autos.autos[5], Autos.autos[8]]);

    const [menorMayorCar, setMenorMayorCar] = useState([Autos.autos[8], Autos.autos[1], Autos.autos[2], Autos.autos[4], Autos.autos[7], Autos.autos[0], Autos.autos[3], Autos.autos[5], Autos.autos[9], Autos.autos[6]],);

    const [mayorMenorCar, setMayorMenorCar] = useState([Autos.autos[6], Autos.autos[9], Autos.autos[5], Autos.autos[3], Autos.autos[0], Autos.autos[7], Autos.autos[4], Autos.autos[2], Autos.autos[1], Autos.autos[8]],);

    const selectMenorMayor = () => {
        setAutosOriginales(menorMayorCar);
    }

    const selectMayorMenor = () => {
        setAutosOriginales(mayorMenorCar);
    }

    const selectTodos = () => {
        setAutosOriginales(autosTodos);
    }

    const selectCamionetas = () => {
        setAutosOriginales(camionetas);
    }

    const selectAutomoviles = () => {
        setAutosOriginales(automoviles);
    }
    //buscar
    const [buscarPalabra, SetBuscarPalabra] = useState({ palabra: 'buscar' });

    const buscar = () => {
        console.log("buscando" + buscarPalabra.palabra + " hola");
    }
    const onChangePalabra = (e) => {
        e.persist();
        SetBuscarPalabra({ ...buscarPalabra, [e.target.name]: e.target.value });
    };

    return (

        <Container fluid>

            <br />
            <br></br>
            <br></br>
            <h1 class="text-center">Catálogo</h1>
            <br></br>

            <div class="row">

                <div class="col-md-6">
                </div>

                <div class="col-md-1">
                    <DropdownButton id="dropdown-item-button" title="Ordenar" variant="outline-primary">
                        <Dropdown.Item as="button" onClick={selectTodos}>Todos</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={selectAutomoviles}>Automóvil</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={selectCamionetas}>Camioneta</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={selectMenorMayor} >Menor precio</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={selectMayorMenor}>Mayor precio </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div class="col-md-4">

                    <InputGroup className="mb-3" >
                        <Button variant="primary" onClick={buscar} style={{ marginLeft: "40px" }}>Buscar</Button>
                        <Form.Control
                            type="text"
                            onChange={onChangePalabra}
                            placeholder="Buscar producto..."
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>


                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">

                {
                    autosOriginales.map(auto => {
                        return (
                            <div class="col">
                                <div class="card border-info mb-3 card text-center" >
                                    <img
                                        width="50"
                                        height="100%"
                                        src={auto.imagen}
                                        title={auto.modelo}
                                        class="card-img-top"
                                        alt={auto.modelo + ". " + auto.year} />
                                    <div class="card-body">
                                        <h3 class="card-title">{auto.modelo}</h3>
                                        <h6 class="card-text">{"$" + auto.precio + " mxn"}</h6>
                                        <br />
                                        <a href="index.html" title="ver" class="buttonSeeProducts" onClick={click}>Ver producto </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <br></br>
        </Container>

    );
}

export default Catalog;

