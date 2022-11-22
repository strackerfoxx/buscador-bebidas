import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BebidasProvider} from './context/BebidasProvider'
import { CategoriasProvider } from "./context/CategoriasProvider"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CategoriasProvider>
          <BebidasProvider>
            <App />
          </BebidasProvider>
      </CategoriasProvider>
  </React.StrictMode>
)
