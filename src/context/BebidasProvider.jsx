import axios from "axios";
import { createContext, useState } from "react";

const BebidasContext = createContext()

function BebidasProvider({children}){
    const [bebidas, setBebidas] = useState([])
    const [drink, setDrink] = useState([])
    const [modal, setModal] = useState(false)


    async function consultarApi(datos){
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const {data} = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            alert(error)
        }
    }
    async function consultarReceta(id){
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const {data} = await axios(url)
            setDrink(data.drinks[0])
        } catch (error) {
            alert(error)
        }
    }

    return(
        <BebidasContext.Provider value={{ 
            bebidas, setBebidas, 
            drink, setDrink,
            modal, setModal,
            consultarApi,
            consultarReceta,
        }}>
        {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}
export default BebidasContext