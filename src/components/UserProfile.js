import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';


function GridComplexExample() {
  const [disable, setDisable] = useState(true);
  const disableFalse = () => setDisable(false);
  const disableTrue = () => setDisable(true);
  const cli = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    disableFalse();
  }
  return (
    <Form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img alt='Edit' title='Editar Perfil' src="/react-example/Images/Edit.gif" width="20%" height="20%" ></img>
      <br></br>
      <br></br>

      <Row className="mb-3 mx-5" >
      <Form.Group as={Col} className="col-md-4" controlId="formGridName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Andrea Elizabeth"  disabled={disable}/>
      </Form.Group>
  
      
        <Form.Group as={Col} className="col-md-4" controlId="formGridLastname1">
          <Form.Label>Apellido paterno</Form.Label>
          <Form.Control placeholder="Flores" disabled={disable}/>
        </Form.Group>
     

     
        <Form.Group as={Col} className="col-md-4" controlId="formGridLastname2">
          <Form.Label>Apellido materno</Form.Label>
          <Form.Control placeholder="Padilla"  disabled={disable}/>
        </Form.Group>
      </Row>

      <Row className="mb-3 mx-5">

        <Form.Group as={Col}  className="col-md-4" controlId="formGridEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            placeholder="electricar19151653@gmail.com"
            disabled={disable} />
        </Form.Group>

        <Form.Group as={Col}  className="col-md-4" controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña"  disabled={disable} />
        </Form.Group>
      
      <Form.Group as={Col} className="col-md-4" controlId="formGridAddress">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="Mahatma Ghandi" disabled={disable} />
      </Form.Group>
      </Row>
      <Button className='buttonSeeProducts me-3'  disabled={disable}  type="submit">
        <h6>Editar </h6>
      </Button>

      <Button className='buttonSeeProducts' onClick={cli}><h6>Habilitar</h6>  </Button>
    </Form>


  );

   
}

export default GridComplexExample;