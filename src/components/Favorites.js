import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function GroupExample() {
    return (

        <Container fluid  className="mt-5">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 class="text-center">Favoritos</h1>
            <br></br>


            <CardGroup className="g-4"  Row xs={1} md={2}  >
                
                <Card >
                    <Card.Img variant="top" src="https://drive.google.com/uc?id=1gwt6da6CtaczVQRUVhnDb_DEkRC4zHN6" width="auto" height="70%" />
                    <Card.Body>
                        <Card.Title>Mercedes A3</Card.Title>
                        <Card.Text>
                            El diseño del nuevo Clase A es una clara evolución del diseño anterior
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">ElectiCar</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://drive.google.com/uc?id=1KH-UffDWyI5gB_3Y_t-o7FZ9R8BbdQNA" width="auto" height="70%" />
                    <Card.Body>
                        <Card.Title>Camaro</Card.Title>
                        <Card.Text>
                            Chevrolet Camaro es un icono de deportividad, aerodinámico y alto desempeño.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">ElectiCar</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://drive.google.com/uc?id=1cxMxvyPthFup3QRRygTAcoQf0wZ1TUfi" width="auto" height="70%" />
                    <Card.Body>
                        <Card.Title>Tiguan</Card.Title>
                        <Card.Text>
                            Te presentamos Nuevo Tiguan, el SUVW que reúne todo lo que tú y tu familia necesitan en seguridad
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer > 
                    <Button variant="outline-danger">Danger</Button>
                        <small className="text-muted">ElectiCar</small> 
                    </Card.Footer >
                    
                </Card>
                
            </CardGroup>
            
        </Container>

    );
}

export default GroupExample;