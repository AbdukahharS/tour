import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </>
)
