import useBebidas from "../hooks/useBebidas"
import {Col, Card, Button} from 'react-bootstrap'

export default function Bebida({bebida}) {
    const { idDrink, strDrink, strDrinkThumb } = bebida
    const { modal, setModal, consultarReceta } = useBebidas()

    function handleCLick(){
      consultarReceta(idDrink)
      setModal(!modal)
      
    }

  return (
    <Col md={4} lg={3}>
      <Card  className='mb-4'>
        <Card.Img variant='top' src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button className='w-100 text-uppercase mt-2' variant='warning' onClick={handleCLick} >Ver Receta</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
