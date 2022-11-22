import {Modal, Image} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

export default function ModalDrinks() {
  const { drink, setModal, modal } = useBebidas()
  const { strDrink, strInstructions, strDrinkThumb } = drink

  const mostrarIngredientes = () => {
    let ingredientes = []

    for(let i = 1; i < 16; i++) {
        if( drink[`strIngredient${i}`]) {
            ingredientes.push(
                <li>{drink[`strIngredient${i}`]} {drink[`strMeasure${i}`]}</li>
            )
        }
    }
    return ingredientes
}
  return (
    <Modal show={modal} onHide={ () => setModal(!modal)}>
    <Image 
        src={strDrinkThumb}
        alt={`Imagen drink ${strDrink}`}
    />
    <Modal.Header>
        <Modal.Title>{strDrink}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className='p-3'>
            <h2>Instrucciones</h2>
            {strInstructions}
            <h2>Ingredientes y Cantidad</h2>
            {mostrarIngredientes()}
        </div>
    </Modal.Body>
</Modal>
  )
}
