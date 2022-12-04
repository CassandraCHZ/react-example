import React from 'react';
import { Container } from 'react-bootstrap';
import "../css-components/home-product.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



//json file
import Autos from "../autos.json";

const HomeProducts = () => {
    return (
       
        <Container fluid>
         
            <br/>
            <h1 class="text-center">Catálogo</h1>
            <br></br>
           
            <div class="row">
    <div class="col-md-2">
    
    </div>
    <div class="col-md-2">
        
    </div>
    <div class="col-md-2">
    <DropdownButton id="dropdown-item-button" title="Categoría"  variant="outline-danger">
            <Dropdown.ItemText></Dropdown.ItemText>
            <Dropdown.Item as="button">Automovil</Dropdown.Item>
            <Dropdown.Item as="button">Camioneta</Dropdown.Item>
            </DropdownButton>
    
    </div>
    <div class="col-md-2">
            <DropdownButton id="dropdown-item-button" title="Ordenar" variant="outline-info">
            <Dropdown.ItemText>Relevante</Dropdown.ItemText>
            <Dropdown.Item as="button">De la A a la Z</Dropdown.Item>
            <Dropdown.Item as="button">Menor precio</Dropdown.Item>
            <Dropdown.Item as="button">Mayor precio </Dropdown.Item>
            <Dropdown.Item as="button">Lo más nuevo</Dropdown.Item>
            <Dropdown.Item as="button">Más vendido </Dropdown.Item>
            </DropdownButton>
    </div>
    <div class="col-md-4">
    <>
            <InputGroup className="mb-3">
            <InputGroup.Text id="search-bar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></InputGroup.Text>
            <Form.Control
           placeholder="Buscar producto..."
           aria-label="Buscar Producto"
           aria-describedby="Buscar Producto" />
           </InputGroup>
            </>  
    </div>      
</div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
       
                {
                    Autos.autos.map(auto => {
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
                                        <a href="index.html" title="ver" class="buttonSeeProducts">Ver producto </a>
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

export default HomeProducts;
