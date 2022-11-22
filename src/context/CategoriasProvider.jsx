import axios from 'axios'
import {useState, useEffect, createContext} from 'react'

const CategoriasContext = createContext()

function CategoriasProvider({children}){
    const [categorias,  setCategorias] = useState([])
    
    async function consultarCategorias(){
        try {
            const {data} = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list') 
            setCategorias(data.drinks)
        } catch (error) {
            alert('error')
        }
    }

    useEffect(() => {
        consultarCategorias()
    }, [])
    
    
    return(
        <CategoriasContext.Provider value={{ categorias }}>
            {children}
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}
export default CategoriasContext