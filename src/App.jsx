import Formulario from "./components/Formulario"
import ListadoDrinks from "./components/ListadoDrinks"
import ModalDrinks from "./components/ModalDrinks"
import { Container } from "react-bootstrap"
import useBebidas from "./hooks/useBebidas"

function App() {
  const { modal } = useBebidas()
  return (
    <>
          <header className="py-5">
            <h1>Buscador de bebidas</h1>
          </header>

          <Container className="mt-5">
              <Formulario/>
              <ListadoDrinks/>
              {modal && ( <ModalDrinks/> )}
              
          </Container>
      </>
  )
}
export default App
